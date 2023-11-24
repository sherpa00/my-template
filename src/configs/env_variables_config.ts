import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const env_variables = {
  environment: {
    node_env: process.env.NODE_ENV,
  },
  server: {
    port: process.env.PORT,
  },
};

export default env_variables;
