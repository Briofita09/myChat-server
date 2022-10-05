import { prisma } from "../../database/database.js";

export async function newMessage(id, channelId, message) {
  const newMessage = await prisma.message.create({
    data: {
      authorId: id,
      channelId,
      text: message,
    },
  });
  return newMessage;
}

export async function getMessages(channelId) {
  const messages = await prisma.message.findMany({
    where: {
      channelId,
    },
    include: {
      author: true,
    },
  });
  return messages;
}
