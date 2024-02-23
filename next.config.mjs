/** @type {import('next').NextConfig} */


  const prefix =
    process.env.NODE_ENV === 'production' ? 'https://limfull.github.io/my-room-digital-frame/' : ''

const basPath =
  process.env.NODE_ENV === 'production' ? '/my-room-digital-frame' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
  images: {
    loader: 'imgix',
    path: 'https://limfull.github.io/my-room-digital-frame/',
  },
  basePath: basPath,
}

export default nextConfig;
