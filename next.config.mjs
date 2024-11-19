import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-storage.pow-gaming.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};
 
export default withNextIntl(nextConfig);