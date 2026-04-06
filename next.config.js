/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
  // Réduit les ChunkLoadError (timeout) en dev sur machines lentes / antivirus
  webpack: (config, { dev }) => {
    if (dev && config.output) {
      config.output.chunkLoadTimeout = 120000;
    }
    return config;
  },
};

module.exports = nextConfig;
