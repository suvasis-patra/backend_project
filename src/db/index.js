import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstances = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`\n MONGODB connected`, connectionInstances.connection.host);
  } catch (error) {
    console.error("MONGODB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
