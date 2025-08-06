/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dev-jr' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dev-jr/' : '',
}

module.exports = nextConfig
