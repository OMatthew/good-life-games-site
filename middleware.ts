const COOKIE_NAME = 'harrisradar_auth';
const PROTECTED_PATHS = ['/radar', '/radar-app'];

export const config = {
  matcher: ['/radar', '/radar/:path*', '/radar-app', '/radar-app/:path*'],
};

function isProtectedPath(pathname: string) {
  return PROTECTED_PATHS.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

function getCookie(request: Request, name: string) {
  const cookieHeader = request.headers.get('cookie') || '';
  const cookies = cookieHeader.split(';').map((cookie) => cookie.trim());
  const match = cookies.find((cookie) => cookie.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : '';
}

function getAuthSecret() {
  return process.env.RADAR_AUTH_SECRET || process.env.RADAR_ACCESS_PASSWORD || '';
}

function continueRequest() {
  return new Response(null, {
    headers: {
      'x-middleware-next': '1',
    },
  });
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

function timingSafeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let diff = 0;
  for (let index = 0; index < left.length; index += 1) {
    diff |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return diff === 0;
}

async function isValidSessionToken(token: string) {
  const secret = getAuthSecret();
  if (!secret || !token) return false;

  const [expiresAt, signature] = token.split('.');
  const expires = Number(expiresAt);
  if (!Number.isFinite(expires) || expires < Date.now() || !signature) return false;

  const expected = await hmacHex(expiresAt, secret);
  return timingSafeEqual(signature, expected);
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  if (!isProtectedPath(url.pathname)) return continueRequest();

  const token = getCookie(request, COOKIE_NAME);
  if (await isValidSessionToken(token)) return continueRequest();

  const loginUrl = new URL('/radar-login/', request.url);
  loginUrl.searchParams.set('next', `${url.pathname}${url.search}`);
  return Response.redirect(loginUrl, 302);
}
