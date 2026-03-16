import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile workspace packages that export TypeScript directly
  transpilePackages: ["@lastbite/db"],
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
