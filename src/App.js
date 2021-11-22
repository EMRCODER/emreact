import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">

      <NavBar />
      <ItemListContainer lista="LISTA A COMPLETAR" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Tienda Emiliano Ruiz
        </p>
        
      </header>
      
    </div>
  );
}

export default App;
