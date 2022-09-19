import Joi from "joi";

export const MessageSchema = Joi.object({
  text: Joi.string().required(),
});
