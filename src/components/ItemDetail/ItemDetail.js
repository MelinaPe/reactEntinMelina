import React from 'react'


const ItemDetail = ({productos = {
    id: 1, 
    name: 'fantasmita',
    price: 200, 
    stock: 10, 
    foto: 'assets/fotoproducto/fantasmas.jpeg',
}}) => {
  return (
    <div>ItemDetail</div>
  )
}

export default ItemDetail