/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.bluebirdgroup.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bluebirdgroup.com',
        port: '',
        pathname: '/',
      },
    ],
  }
}

module.exports = nextConfig
