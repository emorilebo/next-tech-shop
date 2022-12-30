import React from "react";
import Layout from "../components/Layout";

export default function CheckoutPage() {
    const {selectedProducts} = useContext(ProductsContext)
  return <Layout>Checkout</Layout>;
}
