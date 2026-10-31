import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      {
        source: "/work/mukham-construction",
        destination: "/work/muhkam-construction",
        permanent: true,
      },
      {
        source: "/work/vova-even",
        destination: "/work/vova-even-network",
        permanent: true,
      },
      {
        source: "/work/vova-even-ru",
        destination: "/work/vova-even-network",
        permanent: true,
      },
      {
        source: "/work/vova-even-ua",
        destination: "/work/vova-even-network",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
