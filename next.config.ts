import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tailwindui.com",
        pathname: "/**", // Allow all images from tailwindui.com
      },
    ],
  },
  // Add more config options below if needed
};

export default nextConfig;
