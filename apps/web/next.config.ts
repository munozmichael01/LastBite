import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages that export TypeScript directly
  transpilePackages: ["@lastbite/db"],
  // Ensure Prisma engine binary (.so.node) is included in serverless bundle
  // Points to the fixed custom output path defined in schema.prisma
  outputFileTracingIncludes: {
    "/**": ["../../packages/db/generated/client/**"],
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
