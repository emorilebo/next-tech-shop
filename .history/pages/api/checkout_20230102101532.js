import { initMongoose } from "../../lib/mongoose";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  await initMongoose();
  if (req.method !== "POST") {
    res.body("Should be a post but it is not").send();
  }
  const session = 
  res.json("Ok");
}
