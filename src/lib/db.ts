import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient }

function makeClient(): PrismaClient {
  // On Vercel / production use Turso (libSQL) via the Prisma driver adapter.
  // Locally (no TURSO_DATABASE_URL) fall back to the file-based SQLite DB.
  if (process.env.TURSO_DATABASE_URL) {
    const libsql = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    })
    const adapter = new PrismaLibSQL(libsql)
    return new PrismaClient({ adapter })
  }
  return new PrismaClient()
}

export const db = globalForPrisma.prisma || makeClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
