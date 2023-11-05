import { readFileSync } from "fs";
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import logger from "./util/logger";

// config env variables
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const app = express();

// secure http header with helmet
app.use(helmet());

// Parse JSON
app.use(express.json());
// url encoding
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// cors configuration
app.use(cors());

// http logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("common"));
}

// ----- APP ROUTES
app.get("/", async (req: Request, res: Response) => {
  try {
    res.json({
      success: true,
      message: "Successfully loaded",
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    logger.error(err, "Error while getting root route");
  }
});

// api docs for dev
if (process.env.NODE_ENV === "development") {
  const swaggerFile: string = process.cwd() + "/src/swagger/swagger.json";
  const swaggerData: string = readFileSync(swaggerFile, "utf-8");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swaggerDocs: any = JSON.parse(swaggerData);

  const swaggerHOST: string = `localhost:${String(process.env.PORT)}`;

  app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocs, {
      swaggerOptions: {
        host: swaggerHOST,
      },
    }),
  );
}

export default app;
