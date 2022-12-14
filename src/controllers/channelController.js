import * as channelRepository from "../repositories/channelRepository/channelRepository.js";

export async function getAll(req, res) {
  try {
    const channels = await channelRepository.getAll();
    return res.status(200).json(channels);
  } catch (err) {
    console.log(err);
  }
}
