import React, { useContext, useEffect } from "react";
import Footer from "./Footer";
import { ProductsContext } from "./ProductsContext";

export default function Layout({ children }) {
  const { setSelectedProducts } = useContext(ProductsContext);
  const [sucess, setsucess] = useState([]);

  useEffect(() => {
    if (window.location.href.includes("success")) {
      setSelectedProducts([]);
    }
  }, []);

  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}
