import logo from './logo.svg';
import './App.css';
import Title from './components/Title'; 
import NavBar from './components/NavBar';
import Cards from './components/Cards'; 
import Header from './components/ComponentsProps'; 

function App() {
  return (
    <div className="App">
      <Header title='Fóforo piezas en cerámica'/>
      <Title/>
      <NavBar/>
      <Cards/>
    </div>
  );
}

export default App;
