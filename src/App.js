
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Title from './components/Title'; 
import NavBar from './components/NavBar';
import Header from './components/ComponentsProps'; 
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';
import CartContextProvider from './context/CartContext';


function App() {
  return (
  <CartContextProvider> 
    <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/detail' elemtn={<ItemDetailContainer/>}></Route>
            <Title/> 
            <Header title='Fóforo piezas en cerámica'/>
          </Routes>
     </BrowserRouter> 
   </CartContextProvider>
  );
}

export default App;
