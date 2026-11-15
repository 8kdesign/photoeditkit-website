import type { NextConfig } from "next";
import { networkInterfaces } from "node:os";

// In dev mode Next.js blocks its scripts on any address other than localhost, which leaves
// the page visible but not interactive (no slider, no thumbnails). Allow 127.0.0.1 and this
// machine's own network addresses, so the site also works from a phone on the same Wi-Fi.
const localAddresses = Object.values(networkInterfaces())
  .flat()
  .filter((net) => net && net.family === "IPv4" && !net.internal)
  .map((net) => net!.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "*.local", ...localAddresses],
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Resized images are cached for 30 days instead of the default 4 hours.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    // Static assets in public/ are not content-hashed, so cache them for a day and revalidate
    // in the background rather than forever.
    const cache = "public, max-age=86400, stale-while-revalidate=604800";
    return [
      { source: "/examples/:path*", headers: [{ key: "Cache-Control", value: cache }] },
      { source: "/logo/:path*", headers: [{ key: "Cache-Control", value: cache }] },
      { source: "/:file(icon-192.png|icon-512.png|autoedit-suggestions.webp)", headers: [{ key: "Cache-Control", value: cache }] },
    ];
  },
};

export default nextConfig;
