/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from "express";
import logger from "../util/logger";
import { CustomError } from "../errors/customError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
  if (err instanceof CustomError) {
    const { statusCode, errors, logging, message } = err;

    if (logging) {
      logger.error(message, err.stack);
    }

    return res.status(statusCode).json({
      success: false,
      message,
      errors,
    });
  }

  // unhandled error
  logger.error("Unhandled Error Occured", err.stack);
  return res.status(500).json({
    success: false,
    message: "Something went wrong",
  });
};

export default ErrorHandler;
