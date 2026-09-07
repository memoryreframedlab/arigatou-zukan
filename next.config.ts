import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "arigatou.memoryreframedlab.com" }],
        destination: "https://arigatouzukan.jp/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
