/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // ← This forces static export (creates the "out" folder)
  trailingSlash: true,        // Helps with static hosting
  images: {
    unoptimized: true         // Required when using static export
  }
};

module.exports = nextConfig;