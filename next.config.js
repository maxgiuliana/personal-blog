/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/personal-blog',
  assetPrefix: '/personal-blog/',
  trailingSlash: true
}

module.exports = nextConfig