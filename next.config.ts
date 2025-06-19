// import withNextIntl from 'next-intl/plugin';
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

// const withIntlPlugin = withNextIntl('./i18n.ts');

// module.exports = withIntlPlugin(nextConfig);

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);