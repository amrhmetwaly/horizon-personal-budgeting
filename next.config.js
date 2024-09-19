/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com", "graph.facebook.com"], // Add any other domains you need
  },
  distDir: "dist",
  output: "dist",
};

module.exports = nextConfig;
