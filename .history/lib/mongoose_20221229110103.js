import mongoose from "mongoose";

export function async initMongoose(){
   return await mongoose.connect(process.env.MONGODB_URL)
}