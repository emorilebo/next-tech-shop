import { createContext } from "react";

export const ProductsContext = createContext({})

export function ProductsContextProvider(){
    const [selectedProducts, setSelectedProducts] = useState([])
    return <ProductsContext.Provider value={{}}></ProductsContext.Provider>
}