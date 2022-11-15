/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.unsplash.com', 'dih6tqxrn8ffv.cloudfront.net', 'i.ytimg.com', 'images.ctfassets.net', 'dl.airtable.com', 'v5.airtableusercontent.com']
  },
}

module.exports = nextConfig

