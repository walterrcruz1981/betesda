/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com', 'i.ytimg.com', 'images.ctfassets.net', 'dl.airtable.com']
  },
}

module.exports = nextConfig

