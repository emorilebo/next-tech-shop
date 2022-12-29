import mongoose from "mongoose";

export async function  initMongoose(){
    if(mongoose.connection.readyState ===)
   return await mongoose.connect(process.env.MONGODB_URL)
}