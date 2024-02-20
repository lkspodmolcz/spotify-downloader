/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/spotify-downloader",
  images: {
    domains: ["image-cdn-ak.spotifycdn.com", "i.scdn.co"],
  },
};

export default nextConfig;
