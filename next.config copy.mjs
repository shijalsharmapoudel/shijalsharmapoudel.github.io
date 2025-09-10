/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',  // Enable static exports
  basePath: '', // Add this if it's a user site (username.github.io)
  // basePath: '/repository-name', // Use this instead if it's a project site
}

export default nextConfig
