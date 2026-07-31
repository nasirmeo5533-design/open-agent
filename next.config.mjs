/** @type {import('next').NextConfig} */
const basePath =
  process.env.GITHUB_ACTIONS === "true" ? "/open-agent" : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
};

export default nextConfig;
