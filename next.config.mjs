import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: "/",
        destination: "/docs",
        locale: false,
      },
    ];
  },
};

export default withMDX(config);
