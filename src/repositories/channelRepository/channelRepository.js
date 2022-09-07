import { prisma } from "../../database/database.js";

export async function getAll() {
  const channels = await prisma.channel.findMany();
  return channels;
}
