import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "denser.ai" }],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            // api.web3forms.com is required for the contact form to submit
            value: "connect-src 'self' https://api.web3forms.com wss://denser.ai",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
