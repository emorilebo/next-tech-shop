import { createContext } from "react";

export const ProductsContext = createContext({})

export function ProductsContextProvider(){
    const [selected, setselected] = useState(second)
    return <ProductsContext.Provider value={{}}></ProductsContext.Provider>
}