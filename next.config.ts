import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.4"],

  images: {
    qualities: [70, 75],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/saasverse-backend/wp-content/**",
      },
    ],
  },
};

export default nextConfig;