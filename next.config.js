/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true, // Required for GitHub Pages with static exports
  },
};

module.exports = nextConfig;

