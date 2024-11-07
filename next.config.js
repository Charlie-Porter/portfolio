/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/react-portfolio' : '',
  assetPrefix: isProd ? '/react-portfolio' : '',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
};


module.exports = nextConfig;
