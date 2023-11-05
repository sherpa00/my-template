import { Router, IRouter } from "express";
import healthCheckRouter from "./healthCheck.route";

const MainRouter: IRouter = Router();

MainRouter.use("/healthCheck", healthCheckRouter);

export default MainRouter;
