import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts } = useContext(ProductsContext);
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    const uniqIds = new
    fetch("/api/products?ids="+selectedProducts.join(','))
      .then((res) => res.json())
      .then((json) => setProductsInfo(json));
  }, [selectedProducts]);

  
  return <Layout>{selectedProducts.join(",")}</Layout>;
}
