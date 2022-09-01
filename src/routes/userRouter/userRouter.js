import { Router } from "express";

import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware/validateSchemaMiddleware.js";
import { LoginSchema } from "../../schemas/userSchema/loginSchema.js";

import * as userController from "../../controllers/userController/userController.js";
import { SignUpSchema } from "../../schemas/userSchema/signUpSchema.js";

const userRouter = Router();

userRouter.post(
  "/sign-up",
  validateSchemaMiddleware(SignUpSchema),
  userController.createUser
);

export { userRouter };
