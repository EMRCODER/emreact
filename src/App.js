import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import ItemListContainer from './Components/ItemListContainer';
import {useState, useEffect} from 'react';



const App = () => {
  const [title, setTitle] = useState('Newellscarajo');
   
  return (

   <div className="App">

      <NavBar />
      <ItemListContainer lista="Electrónica" />
     
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> {title}  </p>
        <button onClick={()=> setTitle('Nombre actualizado')  }  > Cambiar Title </button>
        
      </header>
      
    </div>
  );
}

export default App;
