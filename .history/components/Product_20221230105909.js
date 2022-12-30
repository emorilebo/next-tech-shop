import React from "react";
import { ProductsContext } from "./ProductsContext";

export default function Product({_id, name, price, description,  picture}) {
const {setSelectedProducts} = useContext(ProductsContext)
  return (
    <div className="w-64">
      <div className="bg-blue-100 p-5 rounded-xl">
        <img src={picture} alt="" />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">{name}</h3>
      </div>
      <p className="text-sm mt-1 leading-4">
        {description}
      </p>
      <div className="flex mt-1">
        <p className="text-xl font-bold grow">N{price}</p>
        <button className="bg-emerald-500 text-white py-1 px-3 rounded font-bold">
          +
        </button>
      </div>
    </div>
  );
}
