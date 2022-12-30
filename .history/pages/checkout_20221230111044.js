import React from "react";
import Layout from "../components/Layout";

export default function CheckoutPage() {
    const {selectedProducts} = useContext(Products)
  return <Layout>Checkout</Layout>;
}
