/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = withPWA({
  // reactStrictMode: true,
  dest: "public",
  register: true,
  swSrc:"src/services/pwa/workers/sw.js",
  skipWaiting: true,
});

export default nextConfig;
