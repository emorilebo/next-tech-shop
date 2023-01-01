import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts } = useContext(ProductsContext);
  useEffect(() => {
    
  
    
  }, [])
  
  return <Layout>{selectedProducts.join(",")}</Layout>;
}
