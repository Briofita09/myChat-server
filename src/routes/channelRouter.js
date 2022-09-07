import { Router } from "express";

import * as channelController from "../controllers/channelController.js";
import isAuhtenticatedMiddleware from "../middlewares/isAuhtenticatedMiddleware.js";

const channelRouter = Router();

channelRouter.get(
  "/all-channels",
  isAuhtenticatedMiddleware,
  channelController.getAll
);

channelRouter.post(
  "/get-in/:serverId",
  isAuhtenticatedMiddleware,
  channelController.enterChannel
);

export { channelRouter };
