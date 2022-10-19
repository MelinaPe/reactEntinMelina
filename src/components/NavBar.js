import React from 'react'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="d-flex justify-content-center">
   <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to='/' className="nav-link active" aria-current="page">Inicio</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBar