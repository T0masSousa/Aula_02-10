/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: '/aula_02-10',
  //distDir: 'dist',
  //trailingSlash: false,
  //skipTrailingSlashRedirect: true,
};
 
export default nextConfig;