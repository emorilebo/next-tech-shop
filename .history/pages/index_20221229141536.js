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

  //Filter function
  let products;
  if (phrase) {
    products = productsInfo.filter((p) =>
      p.name.toLowerCase().includes(phrase)
    );
  } else {
    products = productsInfo;
  }

  return (
    <div className="p-5">
      <input
        value={phrase}
        type="text"
        placeholder="Search for products..."
        className="bg-gray-100 w-full py-2 px-4 rounded-xl outline-none"
        onChange={(e) => setPhrase(e.target.value)}
      />
      <div>
        {categoriesNames.map((c) => (
          <div key={c}>
            {products.find((p) => p.category === c) && (
              <div>
                <h2 className="text-2xl py-5 capitalize">{c}</h2>
                <div className="flex -mx-5 overflow-x-scroll snap-x scrollbar-hide">
                  {products
                    .filter((p) => p.category === c)
                    .map((productInfo) => (
                      <div key={productInfo._id} className="px-5 snap-start">
                        <Product {...productInfo} />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}


export async function getServerSideProps(){
  await initMong
}