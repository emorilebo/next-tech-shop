import { createContext } from "react";

export const ProductsContext = createContext({})

export function ProductsContextProvider(){
    const [first, setfirst] = useState(second)
    return <ProductsContext.Provider value={{}}></ProductsContext.Provider>
}