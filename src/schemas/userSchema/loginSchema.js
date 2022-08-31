import Joi from "joi";

export const UserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
