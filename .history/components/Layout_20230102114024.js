import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";

export default function Layout({ children }) {
  const {setSelected} = useContext(ProductsContext)
  useEffect(() => {
    console.log(window.location.href);
    if(window.location.href.includes('success')){

    }
  }, []);

  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}
