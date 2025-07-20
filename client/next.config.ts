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
        hostname: 'pm-s3-images.s3.us-east-2.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;