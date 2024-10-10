/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@'] = '/src';
    return config;
  },
  i18n: {
    locales: ['en', 'ja', 'zh'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
