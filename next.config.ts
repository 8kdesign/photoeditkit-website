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
  },
};

export default nextConfig;
