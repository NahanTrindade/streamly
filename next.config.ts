import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ hostname: "utfs.io" }] },
  webpack: (config) => {
    config.resolve.fallback = {
      crypto: false,
    };
    return config;
  },
  /* config options here */
};

export default nextConfig;
