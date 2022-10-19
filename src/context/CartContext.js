import { createContext, useState, useContext } from "react";


export const CartContext = createContext ([])
export const useCartContext = () => useContext(CartContext)


const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addItem = (product) => {
        setCartList([ ...cartList, product])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider