import bcrypt from "bcrypt";
import "dotenv/config";
import jwt from "jsonwebtoken";

import * as userRepository from "../../repositories/userRepository/userRepository.js";

const numberOfSalts = 10;

export async function createUser(user) {
  const userExist = await userRepository.findUserByEmail(user.email);

  if (userExist) return null;

  const salt = bcrypt.genSaltSync(numberOfSalts);
  const hashedPassword = bcrypt.hashSync(user.password, salt);
  const newUser = await userRepository.createUser({
    ...user,
    password: hashedPassword,
  });
  return newUser;
}

export async function loginUser(user) {
  const userExist = await userRepository.findUserByEmail(user.email);

  if (!userExist) return null;

  if (!bcrypt.compareSync(user.password, userExist.password)) return null;

  const expiresIn = process.env.EXPIRES_IN;
  const secretToken = process.env.SECRET_TOKEN;

  const token = jwt.sign({ user: userExist.id }, secretToken, { expiresIn });

  return token;
}

export async function editProfile(id, editedUser) {
  const user = await userRepository.findUserById(id);

  if (!user) return null;

  return await userRepository.editProfile(user.id, editedUser);
}
