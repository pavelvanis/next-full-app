import mongoose from "mongoose";

export const connect = () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  // Check if connection already exist
  if (mongoose.connection.readyState === 0) {
    try {
      // Create connection
      mongoose.connect(process.env.MONGODB_URI);
      console.log("MongoDB was connected successfuly");
    } catch (error) {
      console.error(error);
    }
  } else {
    // console.log("Connection with DB already exist");
  }
};
