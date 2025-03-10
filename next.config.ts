import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */

  images: {
    remotePatterns: [
        {
            protocol: "https",
            hostname: "coffee-shop-psi-amber.vercel.app",
        },
    ],
  }
};

export default nextConfig;
