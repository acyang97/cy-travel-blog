/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 6000 * 5,
  images: {
    domains: ["imagedelivery.net", "instagram.com"],
  },
};

module.exports = nextConfig;
