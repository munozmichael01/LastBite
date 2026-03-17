import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages that export TypeScript directly
  transpilePackages: ["@lastbite/db"],
  // Prevent Prisma from being bundled by webpack (needs native binary at runtime)
  serverExternalPackages: ["@prisma/client", "@lastbite/db"],
  // Ensure Prisma engine binary is included in serverless function traces
  outputFileTracingIncludes: {
    "/**": [
      "../../node_modules/.pnpm/@prisma+client@*/node_modules/.prisma/client/**",
      "../../node_modules/.pnpm/@prisma+client@*/node_modules/@prisma/client/**",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
