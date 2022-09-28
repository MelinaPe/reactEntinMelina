import React from 'react'; 
import fantasma from '../assets/fotoproducto/fantasmas.jpeg'; 

const CardWidget = () => {
  return (
    <div className="card">
        <img src={fantasma} alt="fantasmaimagen"/>
        <div className="card-body">
            <h4 className="card-title">Fantasmita</h4>
            <p className="card-text text-secondary">Fóforo pieza en cerámica</p>

        </div>

    </div>
  )
}

export default CardWidget