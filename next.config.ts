import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
