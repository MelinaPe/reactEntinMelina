import React from 'react'; 
import fantasma from '../assets/fotoproducto/fantasmas.jpeg'; 

function CardWidget(props){
  return (
    <div className="card">
        <img src={props.image}/>
        <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">{props.description}</p>
            <button className="card__btn">Detalles del producto</button>
        </div>

    </div>
  )
}

export default CardWidget