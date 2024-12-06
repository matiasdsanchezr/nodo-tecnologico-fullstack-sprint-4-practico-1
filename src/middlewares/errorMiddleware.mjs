import { validationResult, matchedData } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: "error",
      message: "Validation failed",
      errors: errors.array().map((error) => ({
        field: error.path,
        message: error.msg,
      })),
    });
  }
  req.body = matchedData(req, { locations: ["body"] });
  next();
};

export const handleErrors = (err, req, res, next) => {
  const error = {
    status: err.status ?? 500,
    message: err.message ?? "Error interno",
  };
  return res.status(error.status).json(error);
};
