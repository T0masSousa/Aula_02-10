/** @type {import('next').NextConfig} */

const nextConfig = {
  
  future: {
    webpack5: true,
  },

  target: 'serverless',

  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  
  output: "export",
};

export default nextConfig;


