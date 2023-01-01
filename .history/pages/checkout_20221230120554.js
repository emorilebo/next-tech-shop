import React, { useContext } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts } = useContext(ProductsContext);
  useEffect(() => {
    first
  
    
  }, [third])
  
  return <Layout>{selectedProducts.join(",")}</Layout>;
}
