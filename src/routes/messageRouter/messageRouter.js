import { Router } from "express";

import { MessageSchema } from "../../schemas/messageSchema/messageSchema.js";
import * as messageController from "../../controllers/messageController/messageController.js";
import isAuhtenticatedMiddleware from "../../middlewares/isAuhtenticatedMiddleware.js";
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware/validateSchemaMiddleware.js";

const messageRouter = Router();

messageRouter.post(
  "/messages",
  validateSchemaMiddleware(MessageSchema),
  isAuhtenticatedMiddleware,
  messageController.newMessage
);

messageRouter.get(
  "/messages",
  isAuhtenticatedMiddleware,
  messageController.getMessages
);

export { messageRouter };
