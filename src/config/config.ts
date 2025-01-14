import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: +process.env.PORT!,
  HOST: process.env.HOST!,
  NODE_ENV: process.env.NODE_ENV || "development",
  SIGNING_SECRET: process.env.SIGNING_SECRET,
  DEEPGRAM_API_KEY: process.env.DEEPGRAM_API_KEY,
  DEEPGRAM_URL: process.env.DEEPGRAM_URL,
};

export default config;
