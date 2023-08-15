/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
      },
    ],
  },
  future: {
    webpack5: true, // If you're using Webpack 5
  },
  swcMinify: true, // Enable SWC minification in production
};

module.exports = nextConfig;
