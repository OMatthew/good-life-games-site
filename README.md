# Good Life Games Site

Company landing page for Good Life Games LLC.

## Stack

- Vite
- React
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite (usually `http://localhost:5173`).

Do not open `index.html` with `file://...` for this project. Vite apps load modules via HTTP dev server, and direct file loading will fail with CORS/module path errors.

## Build

```bash
npm run build
npm run preview
```

## HarrisRadar Preview Auth

`/radar`, `/radar-app`, and nested preview routes are protected in production by Vercel Routing Middleware. The shared password is checked server-side by `/api/radar-login`, which sets an HttpOnly signed cookie.

Required Vercel environment variable:

- `RADAR_ACCESS_PASSWORD`: shared password for the HarrisRadar preview

Optional Vercel environment variable:

- `RADAR_AUTH_SECRET`: signing secret for the auth cookie. If omitted, `RADAR_ACCESS_PASSWORD` is used for signing too.

Local `npm run preview` serves the static files only and does not run Vercel middleware. Use `vercel dev` when the server-side auth flow needs local verification.

## Notes

- Contact email currently points to `matthew@goodlifegames.io`.
- The site includes dedicated legal pages at `/privacy.html` and `/terms.html`.
