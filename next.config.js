/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → produces /out for Render Static Site "Publish directory"
  output: "export",
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
