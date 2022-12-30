import { createContext } from "react";

export const ProductsContext = createContext({})

export function ProductsContextProvider(){
    return <ProductsContext></ProductsContext>
}