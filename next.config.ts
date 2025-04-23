import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images:{
    unoptimized: true
  },
  basePath: "/company-website",
  trailingSlash: true,
};

export default nextConfig;
