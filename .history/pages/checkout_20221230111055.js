import React from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
    const {selectedProducts} = useContext(ProductsContext)
  return <Layout>Checkout</Layout>;
}
