/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath:
    process.env.NODE_ENV === "production" ? "/horizon-personal-budgeter" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/horizon-personal-budgeter/" : "",
};

module.exports = nextConfig;
