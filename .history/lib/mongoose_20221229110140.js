import mongoose from "mongoose";

export async function  initMongoose(){
   return await mongoose.connect(process.env.MONGODB_URL)
}