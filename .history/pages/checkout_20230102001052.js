import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ProductsContext } from "../components/ProductsContext";

export default function CheckoutPage() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfos, setProductsInfos] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const uniqIds = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqIds.join(","))
      .then((res) => res.json())
      .then((json) => setProductsInfos(json));
  }, [selectedProducts]);

  function moreOfThisProduct(id) {
    setSelectedProducts((prev) => [...prev, id]);
  }
  function lessOfThisProduct(id) {
    const pos = selectedProducts.indexOf(id);

    if (pos !== -1) {
      // setSelectedProducts((prev) => [
      //   ...prev.slice(0, pos),
      //   ...prev.slice(pos + 1),
      // ]);
      setSelectedProducts((prev) => prev.filter((index) => index !== pos));
    }
  }

  const deliveryPrice = 5;
  let subTotal = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const price = productsInfos.find((p) => p._id === id).price;
      subTotal = subTotal + price;
    }
  }
  total = subTotal + deliveryPrice;

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
              <p className="text-sm leading text-gray-500">
                {productsInfo.description}
              </p>
              <div className="flex">
                <div className="grow">N{productsInfo.price}</div>
                <div>
                  <button
                    onClick={() => lessOfThisProduct(productsInfo._id)}
                    className="border border-orange-400 bg-white px-2 rounded-md text-orange-400"
                  >
                    -
                  </button>
                  <span className="px-2">
                    {
                      selectedProducts.filter((id) => id === productsInfo._id)
                        .length
                    }
                  </span>
                  <button
                    onClick={() => moreOfThisProduct(productsInfo._id)}
                    className="border bg-orange-400 border-orange-400 px-2 rounded-md text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
      <div>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-200 w-full rounded-lg py-2 mb-2 px-4 outline-none"
          type="text"
          placeholder="Street address, number"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-gray-200 w-full rounded-lg py-2 mb-2 px-4 outline-none"
          type="text"
          placeholder="City and postal code"
        />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-gray-200 w-full rounded-lg py-2 mb-2 px-4 outline-none"
          type="text"
          placeholder="Your name"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-200 w-full rounded-lg py-2 mb-2 px-4 outline-none"
          type="text"
          placeholder="Email address"
        />
      </div>
      <div className="mt-4">
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-500">Subtotal:</h3>
          <h3 className="font-bold">N{subTotal}</h3>
        </div>
        <div className="flex my-3">
          <h3 className="grow font-bold text-gray-500">Delivery:</h3>
          <h3 className="font-bold">N1234</h3>
        </div>
        <div className="flex my-3 border-t-2 border-dashed border-orange-200 pt-3">
          <h3 className="grow font-bold text-gray-500">Total:</h3>
          <h3 className="font-bold">N1234</h3>
        </div>
      </div>
    </Layout>
  );
}
