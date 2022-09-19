import { findUserById } from "../../repositories/userRepository/userRepository.js";
import * as messageReposiotory from "../../repositories/messageRepository/messageRepository.js";

export async function newMessage(user, message) {
  const validUser = await findUserById(user);
  return await messageReposiotory.newMessage(
    validUser.id,
    validUser.channelId,
    message
  );
}

export async function getMessages(user) {
  const validUser = await findUserById(user);
  return await messageReposiotory.getMessages(validUser.channelId);
}
