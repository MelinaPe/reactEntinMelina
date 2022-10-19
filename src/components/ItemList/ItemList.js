import React from 'react'; 
import { Link } from 'react-router-dom';


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
                                    <Link to={`/detail/${product.id}`} className="btn btn-primary">Detalles</Link>
                                  </div>
                                </div>)}   

    </div>
  )
}



export default ItemList