import React,{ useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar.js'
import ItemListContainer from './Components/ItemListContainer';
import ItemCatContainer from './Components/ItemCatContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { getCategories } from './Products'



const App = () => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const list = getCategories()
    list.then(response => {
      setCategories(response)
    })
  }, [])

  return (

   <div className="App">
       
      <BrowserRouter>
          <NavBar />
          <Switch> 
            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route path='/item/:paramId'>
              <ItemDetailContainer />
            </Route>

            {categories.map(category =>
              <Route key={category.id} path='/category/:paramId' >
              <ItemCatContainer />
            </Route> )}
            
            <Route path='/cart'>
            </Route>

          </Switch>
      </BrowserRouter>

    
      
    </div>
  );
}

export default App;
