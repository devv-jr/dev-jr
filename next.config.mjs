/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Serve under /dev-jr when in production GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/dev-jr' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dev-jr/' : '',
};

export default nextConfig;
