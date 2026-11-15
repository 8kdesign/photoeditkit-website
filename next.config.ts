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
  images: {
    formats: ["image/avif", "image/webp"],
    // Resized images from next/image: cache for 31 days (default is 4 hours).
    minimumCacheTTL: 2678400,
  },
  // Files in /public are served with max-age=0 by default, so browsers re-check them on every
  // visit. Cache photos, logos and icons for 30 days. If you replace one of these files and need
  // returning visitors to see it straight away, give the new file a new name.
  async headers() {
    const cache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];
    return [
      { source: "/examples/:path*", headers: cache },
      { source: "/logo/:path*", headers: cache },
      { source: "/:file(autoedit-suggestions\\.webp|icon-192\\.png|icon-512\\.png|icon\\.svg|apple-icon\\.png|favicon\\.ico)", headers: cache },
    ];
  },
};

export default nextConfig;
