import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/og": ["./content/**/*"],
    },
  },
};

export default nextConfig;
