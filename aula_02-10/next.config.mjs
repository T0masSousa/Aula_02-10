/** @type {import('next').NextConfig} */

const nextConfig = {

  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  
  output: "export",
};

export default nextConfig;


