import { initMongoose } from "../../lib/mongoose";

export default async function handler(req, res){
   await  initMongoose()
   if(req.method !== 'POST'){

    res.body("Should be a post b")
   }
}