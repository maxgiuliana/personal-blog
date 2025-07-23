/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  images: {
    unoptimized: true
  },
  trailingSlash: true
}

module.exports = nextConfig