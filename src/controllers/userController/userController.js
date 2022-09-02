import * as userService from "../../services/userServices/userServices.js";
import * as userRepository from "../../repositories/userRepository/userRepository.js";

export async function createUser(req, res) {
  try {
    const user = req.body;

    const userExist = await userService.createUser(user);

    if (!userExist)
      return res.status(409).json({ message: "Usuário já cadastrado" });

    return res.status(201).json({ message: "Usuário cadastrado com sucesso" });
  } catch (err) {
    console.log(err);
  }
}

export async function loginUser(req, res) {
  try {
    const user = req.body;

    const confirmedUser = await userService.loginUser(user);

    if (!confirmedUser) {
      return res.status(401).json({ message: "Email e/ou senha inválidos" });
    }

    return res.status(200).json({ token: confirmedUser });
  } catch (err) {
    console.log(err);
  }
}

export async function getUser(_req, res) {
  try {
    const validUser = res.locals;

    const user = await userRepository.findUserById(validUser);

    if (!user)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res
      .status(200)
      .json({ name: user.name, email: user.email, channel: user.channelId });
  } catch (err) {
    console.log(err);
  }
}

export async function editProfile(req, res) {
  try {
    const user = res.locals;
    const editedUser = req.body;

    const newUser = await userService.editProfile(user, editedUser);

    if (!newUser)
      return res.status(404).json({ message: "Usuário não encontrado" });

    return res.status(200).json({ message: "Usuário editado com sucesso" });
  } catch (err) {
    console.log(err);
  }
}
