import dotenv from "dotenv";
import app from "./index";

// env variables config
dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const PORT: number = parseInt(process.env.PORT!);

// start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
