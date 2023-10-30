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
        source: "/rastreador",
        destination: "/tracker",
      },
      {
        source: "/rastreador/:slug*",
        destination: "/tracker/:slug*",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/rastreador",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
