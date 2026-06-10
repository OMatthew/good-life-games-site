const COOKIE_NAME = 'harrisradar_auth';

function sanitizeNext(value: unknown) {
  if (typeof value !== 'string' || !value.startsWith('/')) return '/radar-login/';
  if (value.startsWith('//')) return '/radar-login/';
  return value;
}

export function GET(request: Request) {
  const url = new URL(request.url);
  const nextPath = sanitizeNext(url.searchParams.get('next'));
  const response = Response.redirect(new URL(nextPath, request.url), 302);
  response.headers.set(
    'Set-Cookie',
    [
      `${COOKIE_NAME}=`,
      'Path=/',
      'Max-Age=0',
      'HttpOnly',
      'Secure',
      'SameSite=Lax',
    ].join('; '),
  );
  return response;
}
