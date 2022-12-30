import { createContext } from "react";

export const ProductsContext = createContext({})

export function ProductsContextProvider(){
    const [selectedProducts, setselectedProducts] = useState([])
    return <ProductsContext.Provider value={{}}></ProductsContext.Provider>
}