import { Errors } from "../../errors/errors.js";

export function validateSchemaMiddleware(schema) {
  return (req, _res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      console.log(error);
      const message = error.details[0].message;
      throw new Errors(message, 400);
    }
    next();
  };
}
