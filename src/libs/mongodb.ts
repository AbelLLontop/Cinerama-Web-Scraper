import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    if(mongoose.connection.readyState===1){
        return mongoose.connection.asPromise();
    }
    return await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (e) {
    console.error("Error connecting to MongoDB", e);
  }
};
export default connectMongoDB;