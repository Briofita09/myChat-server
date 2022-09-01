import { prisma } from "../../database/database.js";

export async function createUser(user, password) {
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      name: user.name,
      password,
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
