import mongoose from "mongoose";

export async function  initMongoose(){
    if(mongoose.connection.readyState === 1)
   return await mongoose.connect(process.env.MONGODB_URL)
}