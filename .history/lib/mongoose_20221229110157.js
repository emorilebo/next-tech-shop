import mongoose from "mongoose";

export async function  initMongoose(){
    if()
   return await mongoose.connect(process.env.MONGODB_URL)
}