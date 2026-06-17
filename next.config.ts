import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Prisma / libSQL out of the serverless bundle so they load natively.
  serverExternalPackages: [
    '@prisma/client',
    '@prisma/adapter-libsql',
    '@libsql/client',
  ],
};

export default nextConfig;
