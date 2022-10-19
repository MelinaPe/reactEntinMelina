import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { gFetch } from '../Products/gFetch'
import Title from '../Title'


const ItemListContainer = () => {

    const [ products, setProducts] = useState([])

    useEffect(()=>{
        gFetch()
        .then(res=> setProducts(res))
        .catch(err => console.log(err))
        .finally(()=> console.log('final de promesa'))
    }, [])

  
  
  
    return (
    <>
    <Title Title={Title}/>
    <ItemList products={products}/> 

    </>
  )
}

export default ItemListContainer