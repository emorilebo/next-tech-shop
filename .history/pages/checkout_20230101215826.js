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
        productsInfos.map((productsInfo) => <div className="flex mb-">
          <div className="bg-gray-100 p-3 rounded-xl">
            <img className="w-24" src={productsInfo.picture} alt="" />
            <div>
              <h3>{productsInfo.name}</h3>
            </div>
          </div>
        </div>)}
    </Layout>
  );
}
