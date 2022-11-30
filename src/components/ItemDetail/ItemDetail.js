import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({product}) => {

  const [isCount, setIsCount] = useState(false)

  const { addItem } = useCartContext()

  const onAdd = (cantidad=1) => {
    console.log('onAdd', cantidad)
    addItem({ ...product, cantidad } )
  }

  return (
    <center>
    <div className="card" style={{width: '18rem'}}>
            <div key={product.id} className="card" style={{width: '18rem'}}>
                        <img src={product.foto} alt={product.name} style={{ maxWidth: '100%' }} className="card-img-top"/>
                        <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Juguetes frágiles para alimentar la ternura del mundo</p>
                        {/* <button onClick={ ()=> onAdd() }>Agregar al carrito</button> */}
                        </div>
             </div>                          
     </div>
     <div>
    
        isCount 
         <ItemCount onAdd={onAdd}  stock={product.stock} init={1}></ItemCount>
         
         
          {/* <Link to="/cart">
          <button>Finalizar compra</button>
          {/* </Link> */}
          {/* <Link to="/"> */}
          {/* <button>Seguir comprando</button> */}
          {/* </Link> */}
        
      
     </div>
   </center>
   
  )
}

export default ItemDetail