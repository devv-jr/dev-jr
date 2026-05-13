/** @type {import('next').NextConfig} */
const basePath = '/dev-jr';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  reactCompiler: true,
  // Reemplaza 'tu-repo-name' con el nombre real de tu repositorio
  basePath,
  assetPrefix: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  }
}

module.exports = nextConfig
