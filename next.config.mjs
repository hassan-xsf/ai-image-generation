/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.pollinations.ai',
            port: '',
            pathname: '/prompt/**',
          },
        ],
      }, 
};

export default nextConfig;
