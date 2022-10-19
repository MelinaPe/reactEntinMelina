import { createContext, useState, useContext } from "react";


export const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (product) => {
        setCartList(product)
    }
    return (
        <CartContextProvider value={{
            cartList,
            addItem
        }}>
            {children}
        </CartContextProvider>
    )
}

export default CartContextProvider