
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.unisorting.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ellips.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.agrifarming.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.koppert.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.stockcake.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.istockphoto.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'kj1bcdn.b-cdn.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'staticimg.amarujala.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'hokolubazaragritech.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https'
        ,
        hostname: 'static.vecteezy.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
        port: ''
        ,
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.wikifarmer.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.bwbx.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'futura-centralasia.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'regaber.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img-cdn.publive.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'croplands.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.greengiving.be',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'stcroperproduction.blob.core.windows.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'iffco-public-assets.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'westernliner.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'elanthalir.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sainursery.com.au',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'preview.redd.it',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sammyfans.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gumlet.assettype.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.novasogutma.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '5.imimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'live.staticflickr.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
