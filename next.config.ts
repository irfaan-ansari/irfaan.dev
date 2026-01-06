import type { NextConfig } from "next";
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      { hostname: "deifkwefumgah.cloudfront.net" },
      { hostname: "img.shields.io" },
    ],

    qualities: [10, 20, 50, 75],
  },
};

export default withMDX(nextConfig);
