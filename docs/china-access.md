# China Access Deployment Notes

This portfolio has two public deployment targets:

```text
https://liyinru.cn
https://li-yinru-portfolio.vercel.app
```

`liyinru.cn` is configured as the custom-domain GitHub Pages deployment. Vercel
remains the global fallback deployment.

For visitors in mainland China, GitHub Pages may still vary by network
environment. The most reliable long-term path is a static deployment on a
China-friendly CDN or cloud platform, usually with the required domain/hosting
compliance handled by the site owner. The site is prepared for that path through
a static export build.

## Recommended Path

1. Use GitHub Pages for the current custom-domain deployment:

   ```text
   liyinru.cn
   ```

   The workflow `.github/workflows/pages.yml` builds and publishes the generated
   `out/` directory. The custom domain is preserved by `public/CNAME`.

2. Keep the Vercel deployment for global visitors and fallback access.

3. Generate a static build for China-friendly hosting:

   ```bash
   npm run build:static
   ```

4. For a more reliable mainland China route, upload the generated `out/`
   directory to one of these targets:
   - Tencent EdgeOne Pages or Tencent Cloud COS + CDN
   - Alibaba Cloud OSS + CDN
   - Huawei Cloud OBS + CDN
   - Another static host with a mainland China or Hong Kong/Singapore edge

5. Configure the same security headers at the CDN or hosting layer. In static
   export mode, Next.js does not emit `headers()` from `next.config.ts`, so the
   hosting provider must handle response headers.

6. Point a custom domain to the China-friendly host after the domain and hosting
   requirements are ready.

## Why Static Export

The current website does not need a database, login system, API routes, server
actions, or runtime personalization. That makes it suitable for static hosting:

- HTML, CSS, JavaScript, and local images can be served directly from a CDN.
- The build output is portable and can be uploaded to object storage.
- China-facing hosting can be configured without changing the public Vercel
  site.

## Build Modes

Default production build for Vercel:

```bash
npm run build
```

Portable static build:

```bash
npm run build:static
```

`build:static` sets `NEXT_OUTPUT=export`, enables `output: "export"` in
`next.config.ts`, disables Next.js image optimization for local static assets,
and writes the static site to `out/`.

## Header Checklist For Static Hosts

Mirror these headers in the CDN console where supported:

```text
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
Origin-Agent-Cluster: ?1
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

For certificate and award images, keep `X-Robots-Tag: noindex, noimageindex,
noarchive` where the provider supports path-level headers.
