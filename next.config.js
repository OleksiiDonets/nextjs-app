/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  env: {
    API_HOST: 'https://api.spacexdata.com/v4'
  }
}

module.exports = nextConfig
