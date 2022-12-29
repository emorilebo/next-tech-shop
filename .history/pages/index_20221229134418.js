import { useEffect, useState } from "react";
import Product from "../components/Product";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProductsInfo(json));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map((p) => p.category))];

  return (
    <div className="p-5">
      <input
        value={phrase}
        type="text"
        placeholder="Search for products..."
        className="bg-gray-100 w-full py-2 px-4 rounded-xl"
      />
      <div>
        {categoriesNames.map((c) => (
          <div key={c}>
            <h2 className="text-2xl py-5 capitalize">{c}</h2>
            <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
              {productsInfo
                .filter((p) => p.category === c)
                .map((productInfo) => (
                  <div key={productInfo._id} className="px-5 snap-start">
                    <Product {...productInfo} />
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="py-4"></div>
      </div>
    </div>
  );
}