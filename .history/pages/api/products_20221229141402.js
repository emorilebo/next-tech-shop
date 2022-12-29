import { initMongoose } from "../../lib/mongoose";
import Product from "../../models/Product";

export as

export default async function handle(req, res) {
  await initMongoose();
  res.json(await );
//   res.json(await Product.find().exec());
}
