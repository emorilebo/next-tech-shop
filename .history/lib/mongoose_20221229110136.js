import mongoose from "mongoose";

export function  initMongoose(){
   return await mongoose.connect(process.env.MONGODB_URL)
}