/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: " ",
    domains: ["media.graphassets.com"]
  },
  assetPrefix:'/',
};

module.exports = nextConfig;