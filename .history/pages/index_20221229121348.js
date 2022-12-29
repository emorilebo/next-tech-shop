import { useEffect, useState } from "react";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProductsInfo(json));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map((p) => p.category))];
  console.log({ categoriesNames });

  return (
    <div className="p-5">
      <div> 
        <h2 className="text-2xl">Mobiles</h2>
        <div className="py-4">
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
              <p className="text-xl font-bold grow">N899</p>
              <button className="bg-emerald-500 text-white py-1 px-3 rounded font-bold">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
