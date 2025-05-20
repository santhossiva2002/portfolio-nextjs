  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: 'export',
    basePath: '/portfolio-nextjs',
    assetPrefix: '/portfolio-nextjs/',
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
    trailingSlash: true, // Optional but helps with GitHub Pages
  };

  module.exports = nextConfig;
