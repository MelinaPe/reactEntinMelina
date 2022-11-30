import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
// import { gFetch } from '../Products/gFetch'
import Title from '../Title'


// const Loading = () => {

//   useEffect (() => {
//     console.log('Loading')

//     return () => {
//       console.log('Dismounting Loading')
//     }

//     return <h2>Cargando...</h2>
//   })




const ItemListContainer = () => {

    const [ products, setProducts] = useState([])

    // useEffect(()=>{
    //     gFetch()
    //     .then(res=> setProducts(res))
    //     .catch(err => console.log(err))
    //     .finally(()=> console.log('final de promesa'))
    // }, [])


  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'products')
    getDocs(queryCollection)
     .then(res => setProducts(res.docs.map(prod => ({ id: prod.id, ...prod.data()   }) )))
     .catch(err => console.log(err))
     .finally(()=> console.log())   
    //  aca va el loading que tengo que armar
  }, [])
  
  
    return (
    <>
    <Title Title={Title}/>
    <ItemList products={products}/> 

    </>
    )
}

export default ItemListContainer