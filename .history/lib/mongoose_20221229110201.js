import mongoose from "mongoose";

export async function  initMongoose(){
    if(mongoose.connect)
   return await mongoose.connect(process.env.MONGODB_URL)
}