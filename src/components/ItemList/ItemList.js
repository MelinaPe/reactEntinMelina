import React from 'react'; 


const ItemList = ({products}) => {
  return (
    <div className="cardContainer" style={{
        display:'flex',
        flexDirection: 'row', 
        flexWrap: 'wrap'
        // flex: '1 1 auto'
    
    }}>

    { products.map ( product => <div key={product.id} className="card" style={{width: '18rem'}}>
                                  <div className="card-body">
                                    <h5 className="card-title" >{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <img src={product.foto} alt={product.name} style={{ maxWidth: '100%' }}/>
                                    <a href="#" className="btn btn-primary">Detalles</a>
                                  </div>
                                </div>)}   

    </div>
  )
}


export default ItemList