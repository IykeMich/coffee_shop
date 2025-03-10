/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coffee-shop-psi-amber.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;