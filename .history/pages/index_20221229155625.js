import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import Product from "../components/Product";
import { initMongoose } from "../lib/mongoose";
import { findAllProducts } from "./api/products";

export default function Home({ products }) {
  // const [productsInfo, setProductsInfo] = useState([]);
  const [phrase, setPhrase] = useState("");

  //USEEFFECT not needed because of the getServerSideProps
  // useEffect(() => {
  //   fetch("/api/products")
  //     .then((res) => res.json())
  //     .then((json) => setProductsInfo(json));
  // }, []);

  const categoriesNames = [...new Set(products.map((p) => p.category))];

  //Filter function
  // let products;
  if (phrase) {
    products = products.filter((p) => p.name.toLowerCase().includes(phrase));
  }
  // else {
  //   products = productsInfo;
  // }

  return (
    <Layout>
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
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps() {
  await initMongoose();
  const products = await findAllProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
