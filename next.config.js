/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons",
    domains: ["media.graphassets.com"],
  },
  assetPrefix: "/",
};

module.exports = nextConfig;
