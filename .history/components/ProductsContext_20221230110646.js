import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export function ProductsContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = useLocal([]);
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
