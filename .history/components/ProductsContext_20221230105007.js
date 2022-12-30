import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export function ProductsContextProvider() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <ProductsContext.Provider
      value={{ selectedProducts }}
    ></ProductsContext.Provider>
  );
}
