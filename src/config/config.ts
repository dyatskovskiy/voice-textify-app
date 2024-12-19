import dotenv from "dotenv";

dotenv.config();

const config = {
  DB_URI: process.env.MONGODB_URI,
};

export default config;
