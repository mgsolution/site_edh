/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      type: 'asset/resource',
    });
    return config;
  }
}

module.exports = nextConfig