// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chakra-s3-images.s3.us-east-1.amazonaws.com',
        port: "",
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;