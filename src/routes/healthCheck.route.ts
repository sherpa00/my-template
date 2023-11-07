/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { IRouter, Router, Request, Response, NextFunction } from "express";
import logger from "../util/logger";
import BadRequestError from "../errors/BadRequestError";

const healthCheckRouter: IRouter = Router();

interface HealthCheckResponse {
  uptime: number;
  responsetime: [number, number];
  message: string;
  timestamp: number;
}

healthCheckRouter.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const healthCheckInfo: HealthCheckResponse = {
      uptime: process.uptime(),
      responsetime: process.hrtime(),
      message: "Good Health",
      timestamp: Date.now(),
    };

    res.status(200).json(healthCheckInfo);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: Error | any) {
    next(err);
  }
});

export default healthCheckRouter;
