import type { NextConfig } from "next";

const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy,
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  {
    key: "Cross-Origin-Opener-Policy",
    value: "same-origin",
  },
  {
    key: "Cross-Origin-Resource-Policy",
    value: "same-origin",
  },
  {
    key: "Origin-Agent-Cluster",
    value: "?1",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const sensitiveAssetHeaders = [
  {
    key: "X-Robots-Tag",
    value: "noindex, noimageindex, noarchive",
  },
];

const isStaticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    ...(isStaticExport
      ? {
          unoptimized: true,
        }
      : {}),
    localPatterns: [
      {
        pathname: "/images/picture/**",
        search: "",
      },
    ],
  },
  ...(isStaticExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: securityHeaders,
            },
            {
              source: "/images/picture/transport-competition-award.jpg",
              headers: sensitiveAssetHeaders,
            },
            {
              source: "/images/picture/caac-license-redacted.jpg",
              headers: sensitiveAssetHeaders,
            },
            {
              source: "/images/picture/computer-rank%20level-2.jpg",
              headers: sensitiveAssetHeaders,
            },
          ];
        },
      }),
};

export default nextConfig;
