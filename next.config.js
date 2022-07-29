/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
    publicRuntimeConfig: {
      
      staticFolder: '/static',

      // baseQueryUrl: process.env.baseQueryUrl
    }
  }
}

module.exports = nextConfig
