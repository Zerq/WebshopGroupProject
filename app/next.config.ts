import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'loremflickr.com',
        },
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
        },
      ],
    },
};

export default nextConfig;
