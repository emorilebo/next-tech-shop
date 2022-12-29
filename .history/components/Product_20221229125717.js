import React from "react";

export default function Product({name, price, description, category, picture}) {
//   console.log(productInfo);
  return (
    <div className="w-64">
      <div className="bg-blue-100 p-5 rounded-xl">
        <img src="/products/iphone.png" alt="" />
      </div>
      <div className="mt-2">
        <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
      </div>
      <p className="text-sm mt-1 leading-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet,
        consectetur adipiscing elit{" "}
      </p>
      <div className="flex mt-1">
        <p className="text-xl font-bold grow">{price}</p>
        <button className="bg-emerald-500 text-white py-1 px-3 rounded font-bold">
          +
        </button>
      </div>
    </div>
  );
}
