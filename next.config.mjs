/** @type {import('next').NextConfig} */


  const prefix =
    process.env.NODE_ENV === 'production' ? 'https://limfull.github.io/my-room-digital-frame/' : ''

const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
}

export default nextConfig;
