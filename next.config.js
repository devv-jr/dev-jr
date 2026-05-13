/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Reemplaza 'tu-repo-name' con el nombre real de tu repositorio
  basePath: '/dev-jr',
  assetPrefix: '/dev-jr',
}

module.exports = nextConfig
