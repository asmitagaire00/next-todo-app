import { PrismaClient } from "@prisma/client";

declare global {
  namespace NodeJS {
    interface Global {
      prisma: import("@prisma/client").PrismaClient;
    }
  }
}
