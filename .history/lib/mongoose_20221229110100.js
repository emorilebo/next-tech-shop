import mongoose from "mongoose";

export function ay initMongoose(){
   return await mongoose.connect(process.env.MONGODB_URL)
}