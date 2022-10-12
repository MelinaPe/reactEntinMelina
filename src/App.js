import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Title from './components/Title'; 
import NavBar from './components/NavBar';
import Cards from './components/Cards'; 
import Header from './components/ComponentsProps'; 
import CardWidget from './components/CardWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer.js/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ItemListContainer}/>
        <Route path='/detail' element={<ItemDetailContainer/>}/>
        <CardWidget title="Fantasmita" 
        description="Pieza de cerámica"/>
        <CardWidget title="Pera"
        description="Pieza de cerámica"/>
        <CardWidget title="Hombrecitos"
        description="Pieza de cerámica"/>
      </Routes> 
      <Title/> 
      <Header title='Fóforo piezas en cerámica'/>
    </BrowserRouter>

  );
}

export default App;
