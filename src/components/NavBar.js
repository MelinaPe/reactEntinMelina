import React from 'react'; 
import { Link } from 'react-router-dom';
import foforologo from '../assets/logos/logofoforo.png'

const NavBar = () => {
  return (
  //   <div className="d-flex justify-content-center">
  //  <nav className="navbar navbar-expand-lg bg-light">
  //   <div className="container-fluid">
  //     <a className="navbar-brand" href="#"></a>
  //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <Link to='/' className="nav-link active" aria-current="page">Inicio</Link>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Productos</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#">Contacto</a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  // </div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
 
  <div className="container-fluid">
  
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src={foforologo}
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to="/">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        </Link>
        <Link>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        </Link>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    
    </div>
   
    <div className="d-flex align-items-center">
      {/* <a className="text-reset me-3" href="#"> */}
      <Link to="/Cart" className="text-reset me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      </Link>
      {/* </a> */}

      
    </div>
   
  </div>
</nav>
  )
}

export default NavBar