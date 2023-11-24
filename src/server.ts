import env_variables from "./configs/env_variables_config";
import app from "./index";
import logger from "./util/logger";

const PORT: number = parseInt(env_variables.server.port!);

// start server
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
