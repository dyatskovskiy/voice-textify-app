import dotenv from "dotenv";

dotenv.config();

const config = {
  SIGNING_SECRET: process.env.SIGNING_SECRET,
  DEEPGRAM_API_KEY: process.env.DEEPGRAM_API_KEY,
  DEEPGRAM_URL: process.env.DEEPGRAM_URL,
};

export default config;
