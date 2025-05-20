/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',                       
  basePath: '/portfolio-nextjs',          
  assetPrefix: '/portfolio-nextjs/',      
  eslint: {
    ignoreDuringBuilds: true,             
  },
  images: { unoptimized: true },          
  trailingSlash: true,                   
};

module.exports = nextConfig;
