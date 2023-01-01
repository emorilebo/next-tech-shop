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
      {productsInfos.legnth === 0 ? (
        <div>No Products in your shopping cart</div>
      ) : (
        productsInfos.map((productsInfo) => (
          <div className="flex mb-5">
            <div className="bg-gray-100 p-3 rounded-xl shrink-0">
              <img className="w-24" src={productsInfo.picture} alt="" />
             
            </div>
            <div className="pl-4">
                <h3 className="font-bold text-lg ">{productsInfo.name}</h3>
                <p className="text-sm leading text-gray-500">{productsInfo.description}</p>
                <div></div>
                <div></div>
              </div>
          </div>
        ))
      )}
    </Layout>
  );
}
