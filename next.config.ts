import type { NextConfig } from "next";

// Static export: the whole site is prebuilt into the "out" folder and served
// as plain files, so it runs on a static host with no server.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  devIndicators: false,
};

export default nextConfig;
