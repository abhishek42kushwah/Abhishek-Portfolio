module.exports = {
  // ... existing config
  images: {
    domains: ['denser.ai'], // Add this if you're using Next.js Image with their domains
  },
  // For WebSocket connections
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `connect-src 'self' wss://denser.ai`,
          },
        ],
      },
    ];
  },
};