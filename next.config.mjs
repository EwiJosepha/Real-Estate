/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.pinterest.com',
        pathname: '/account123/**',
      },
    ],
  },
};


export default nextConfig;
