const COOKIE_NAME = 'harrisradar_auth';
const SESSION_TTL_SECONDS = 60 * 60 * 24 * 14;

function getAccessPassword() {
  return process.env.RADAR_ACCESS_PASSWORD || '';
}

function getAuthSecret() {
  return process.env.RADAR_AUTH_SECRET || process.env.RADAR_ACCESS_PASSWORD || '';
}

function sanitizeNext(value: unknown) {
  if (typeof value !== 'string' || !value.startsWith('/')) return '/radar-app/';
  if (value.startsWith('//')) return '/radar-app/';
  return value;
}

async function hmacHex(message: string, secret: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(message));
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function createSessionToken() {
  const secret = getAuthSecret();
  const expiresAt = String(Date.now() + SESSION_TTL_SECONDS * 1000);
  const signature = await hmacHex(expiresAt, secret);
  return `${expiresAt}.${signature}`;
}

function redirectToLogin(request: Request, nextPath: string, error: string) {
  const url = new URL('/radar-login/', request.url);
  url.searchParams.set('next', nextPath);
  url.searchParams.set('error', error);
  return Response.redirect(url, 303);
}

export async function POST(request: Request) {
  const form = await request.formData();
  const password = String(form.get('password') || '');
  const nextPath = sanitizeNext(form.get('next'));
  const accessPassword = getAccessPassword();
  const authSecret = getAuthSecret();

  if (!accessPassword || !authSecret) {
    return redirectToLogin(request, nextPath, 'config');
  }

  if (password !== accessPassword) {
    return redirectToLogin(request, nextPath, 'password');
  }

  const token = await createSessionToken();
  const response = Response.redirect(new URL(nextPath, request.url), 303);
  response.headers.set(
    'Set-Cookie',
    [
      `${COOKIE_NAME}=${encodeURIComponent(token)}`,
      'Path=/',
      `Max-Age=${SESSION_TTL_SECONDS}`,
      'HttpOnly',
      'Secure',
      'SameSite=Lax',
    ].join('; '),
  );
  return response;
}

export function GET(request: Request) {
  return Response.redirect(new URL('/radar-login/', request.url), 302);
}
