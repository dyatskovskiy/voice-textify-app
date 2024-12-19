import mongoose from "mongoose";
import config from "./config";

const connectDB = async (): Promise<boolean | void> => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  const { DB_URI } = config;

  if (!DB_URI) {
    return console.error("Failed to connect to the database");
  }

  try {
    await mongoose.connect(DB_URI);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
