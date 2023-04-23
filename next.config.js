/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["headless-wordpress-nextjs-starter-template.local", "api-headless-wordpress-nextjs-blog.000webhostapp.com"],
  },
};

module.exports = nextConfig;
