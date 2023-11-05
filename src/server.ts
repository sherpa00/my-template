import dotenv from "dotenv";
import app from "./index";
import logger from "./util/logger";

// env variables config
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const PORT: number = parseInt(process.env.PORT!);

// start server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
