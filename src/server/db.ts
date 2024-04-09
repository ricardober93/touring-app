import { PrismaClient } from "@prisma/client";
import { singleton } from "./../singleton";


declare global {
    var prisma: PrismaClient;
  }

  let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
      prisma = singleton("prisma", () => new PrismaClient());
  } else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    prisma = global.prisma;
  }
  prisma.$connect();
}

export { prisma };