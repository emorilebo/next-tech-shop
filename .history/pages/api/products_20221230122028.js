import { initMongoose } from "../../lib/mongoose";
import Product from "../../models/Product";

export async function findAllProducts() {
  return Product.find().exec();
}

export default async function handle(req, res) {
  await initMongoose();
  const { ids } = req.query;
  if (ids) {
    const is
    res.json(await Product.find({ _id: { $in: ids.join(",") } }).exec());
  } else {
    res.json(await findAllProducts());
  }

  //   res.json(await Product.find().exec());
}
