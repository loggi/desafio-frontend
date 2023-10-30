/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  async rewrites() {
    return [
      {
        source: "/rastreamento",
        destination: "/tracker",
      },
      {
        source: "/rastreamento/:slug*",
        destination: "/tracker/:slug*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rastreamento",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
