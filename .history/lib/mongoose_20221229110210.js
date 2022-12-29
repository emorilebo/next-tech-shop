import mongoose from "mongoose";

export async function  initMongoose(){
    if(mongoose.connection.re)
   return await mongoose.connect(process.env.MONGODB_URL)
}