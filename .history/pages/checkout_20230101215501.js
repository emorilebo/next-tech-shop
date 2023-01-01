import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqIds.join(","))
      .then((res) => res.json())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  return (
    <Layout>
      {/* {productsInfos.length && <div>No Products in your shopping cart</div>} */}
      {productsInfos.legnth===0 ? <div>No Products in your shopping cart</div> : 
        productsInfos.map((productsInfo) => <div>
          <div>
            <img src={prod} alt="" />
          </div>
        </div>)}
    </Layout>
  );
}
