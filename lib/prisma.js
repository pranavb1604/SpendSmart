import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();  // reading

// writing
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma: This global variable ensures that the Prisma client instance is
// reused across hot reloads during development. Without this, each time your application
// reloads, a new instance of the Prisma client would be created, potentially leading
// to connection issues.
//NODE_ENV: env variable which tells whether the roject is in devlopment mode or in production mode because hot reloads occur in devlopment mode only
