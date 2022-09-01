import bcrypt from "bcrypt";
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
