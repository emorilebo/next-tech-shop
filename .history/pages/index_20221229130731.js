import { useEffect, useState } from "react";
import Product from "../components/Product";

export default function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((json) => setProductsInfo(json));
  }, []);

  const categoriesNames = [...new Set(productsInfo.map((p) => p.category))];

  return (
    <div className="p-5">
      <div>
        {categoriesNames.map((c) => (
          <div key={c}>
            <h2 className="text-2xl capitalize">{c}</h2>
           <div className="flex -mx-5">
           {productsInfo
              .filter((p) => p.category === c)
              .map((productInfo) => (
                <div key={productInfo._id}  className="px-5">
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
