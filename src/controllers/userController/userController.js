import * as userService from "../../services/userServices/userServices.js";

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
