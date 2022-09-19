import * as messageService from "../../services/messageServices/messageServices.js";

export async function newMessage(req, res) {
  try {
    const message = req.body;
    const user = res.locals;
    const newMessage = await messageService.newMessage(user, message.text);
    res
      .status(201)
      .json({ message: "Mensagem gravada com sucesso", newMessage });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Erro interno do servidor" });
  }
}

export async function getMessages(req, res) {
  try {
    const user = res.locals;
    const messages = await messageService.getMessages(user);
    return res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro Interno do Servidor" });
  }
}
