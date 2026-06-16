import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Prisma / libSQL out of the serverless bundle so they load natively.
  experimental: {
    serverComponentsExternalPackages: [
      '@prisma/client',
      '@prisma/adapter-libsql',
      '@libsql/client',
    ],
  },
};

export default nextConfig;
