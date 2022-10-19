import React, { useEffect, useState } from 'react'
import { gFetch } from '../Products/gFetch'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const [ product, setProduct ] = useState({})
  const { idProducto } = useParams()
  useEffect(() => {
    gFetch(idProducto)
    .then (resp => { setProduct (resp)})
    .catch(err => console.log(err))
    .finally(() => console.log('finalizo'))
  }, [])

  
  return (


    <div className="ItemDetailContainer">

      <ItemDetail product={product}/>

    </div>
  )
}

export default ItemDetailContainer