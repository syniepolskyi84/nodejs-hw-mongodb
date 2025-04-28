import createHttpError from 'http-errors';

export const validateBody = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const formattedErrors = error.details.map((detail) => detail.message).join(', ');
    return next(createHttpError(400, `Bad Request: ${formattedErrors}`));
  }

  next();
};
