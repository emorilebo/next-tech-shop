import { initMongoose } from "../../lib/mongoose";
import Product from "../../models/Product";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  await initMongoose();
  if (req.method !== "POST") {
    res.json("Should be a post but it is not").send();
  }

  const productsIds = req.body.products.split(",");
  const uniqIds = [...new Set(productsIds)];
  const products = await Product.find({ _id: { $in: uniqIds } }).exec();

  let line_items = [];
  for (let productId of uniqIds) {
    const quantity = productsIds.find((id) => productId).length;
    const product = products.find((p) => p._id.toString() === productId);
    line_items.push({
      quantity,
      price_data: {
        currency: "USD",
        product_data: { name: product.name },
        unit_amount: product.price * 100,
      },
    });
    //   res.json(products);

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
      //   automatic_tax: { enabled: true },
    });
    res.redirect(303, session.url);

    //   res.json(req.method);
  }
}
