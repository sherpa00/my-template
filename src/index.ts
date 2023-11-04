import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

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
app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Successfully loaded",
  });
});

export default app;
