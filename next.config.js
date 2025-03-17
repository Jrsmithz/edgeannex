/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['vercel.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

module.exports = nextConfig 