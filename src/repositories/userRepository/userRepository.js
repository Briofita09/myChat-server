import { prisma } from "../../database/database.js";

export async function createUser(user) {
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      password: user.password,
    },
  });
  return newUser;
}

export async function findUserByEmail(email) {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  return user;
}

export async function findUserById(id) {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return user;
}

export async function editProfile(id, user) {
  const editedUser = await prisma.user.update({
    where: { id },
    data: {
      name: user.name,
      email: user.email,
    },
  });
  return editedUser;
}

export async function enterChannel(channelId, userId) {
  const newChannel = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      channel: { connect: { id: +channelId } },
      isConnected: true,
    },
  });
  return newChannel;
}

export async function disconnect(user) {
  return await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      isConnected: false,
    },
  });
}

export async function getUsersInChannel(channelId) {
  return await prisma.user.findMany({
    where: {
      channelId: parseInt(channelId),
      isConnected: true,
    },
  });
}
