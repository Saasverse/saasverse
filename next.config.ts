import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  allowedDevOrigins: ["192.168.1.4"],

  images: {
    unoptimized: true,
    qualities: [70, 75],
  },
};

export default nextConfig;