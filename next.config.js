/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'avatar.vercel.sh']
  },
  output: "export",
  images: { unoptimized: true },
};

module.exports = nextConfig;
