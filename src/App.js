
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import CartContextProvider from './context/CartContext';
import Cart from './pages/Cart';


function App() {
  return (
  <CartContextProvider> 
    <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/detail/:idProduct' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={Cart}></Route>
          </Routes>
     </BrowserRouter> 
   </CartContextProvider>
  );
}

export default App;


//  `/detail/${id}` 