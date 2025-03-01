/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    experimental: {
    serverActions: {}, // يجب أن يكون كائنًا فارغًا بدلًا من true
  },
};

export default nextConfig;

