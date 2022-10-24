import React from 'react'
import { useCartContext } from '../context/CartContext'

export default function Cart(){
    const { cartList } = useCartContext()
  return (
    <div>
        <h1>Carrito</h1>
        <ul>
            {cartList.map((product) => <li> {product.name} </li>)}
        </ul>

    </div>
  )
}
