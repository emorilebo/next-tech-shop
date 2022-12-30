import { createContext, useState } from "react";

export const ProductsContext = createContext({});

export function ProductsContextProvider({ children }) {
  const [selectedProducts, setSelectedProducts] = use([]);
  return (
    <ProductsContext.Provider value={{ selectedProducts, setSelectedProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
