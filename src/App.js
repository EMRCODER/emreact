import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar.js'
import ItemListContainer from './Components/ItemListContainer';



const App = () => {
   
  return (

   <div className="App">

      <NavBar /> 
      <ItemListContainer />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
    </div>
  );
}

export default App;
