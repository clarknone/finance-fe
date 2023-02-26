/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";

const nextConfig = withPWA({
  // reactStrictMode: true,
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default nextConfig;
