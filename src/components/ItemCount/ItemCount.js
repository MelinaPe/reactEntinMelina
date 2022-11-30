import React, { useState } from 'react'

const ItemCount = ({ stock, init, onAdd}) => {
    const [count, setCount] = useState(init)

    const handleAdd = () => {
        if (count < stock)
        setCount (count + 1)
    }

    const handleRemove = () => {
        if (count > init)
        setCount(count - 1)
    }

    const handleOnAdd = () => { 
    onAdd(count)
    }




  return (
    <div>
        <button type="button" class="btn btn-outline-dark" onClick={handleAdd}>+</button>
        <p>{count}</p>
        <button type="button" class="btn btn-outline-dark" onClick={handleRemove}>-</button>
        <button type="button" class="btn btn-outline-dark" onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount