import { IRouter, Router, Request, Response } from "express";
import logger from "../util/logger";

const healthCheckRouter: IRouter = Router();

interface HealthCheckResponse {
  uptime: number;
  responsetime: [number, number];
  message: string;
  timestamp: number;
}

healthCheckRouter.get("/", (req: Request, res: Response): void => {
  try {
    const healthCheckInfo: HealthCheckResponse = {
      uptime: process.uptime(),
      responsetime: process.hrtime(),
      message: "Good Health",
      timestamp: Date.now(),
    };

    res.status(200).json(healthCheckInfo);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: Error | any) {
    logger.error(err, "Error while getting health check");
    res.status(400).json({});
  }
});

export default healthCheckRouter;
