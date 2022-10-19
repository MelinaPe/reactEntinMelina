import React from 'react'
import { useCartContext } from '../../context/CartContext'


const ItemDetail = ({product}) => {

  const { addItem } = useCartContext()

  const onAdd = (cantidad=2) => {
    console.log('onAdd', cantidad)
    addItem({ ...product, cantidad } )
  }

  return (
    <center>
      <div className="card" style={{width: '18rem'}}>
                                <img src={product.foto} alt={product.name} style={{ maxWidth: '100%' }} className="card-img-top"/>
                                <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">Juguetes frágiles para alimentar la ternura del mundo</p>
                                <button onClick={ ()=> onAdd() }>Agregar al carrito</button>
                                </div>
     </div>                           
    </center>
  )
}

export default ItemDetail