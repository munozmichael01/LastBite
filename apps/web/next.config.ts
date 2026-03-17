import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Prisma engine binary (.so.node) is included in serverless bundle.
  // Generated client lives at apps/web/generated/prisma/ (see schema.prisma output).
  outputFileTracingIncludes: {
    "/**": ["./generated/prisma/**"],
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
