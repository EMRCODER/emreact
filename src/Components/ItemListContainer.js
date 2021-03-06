import React,{ useState, useEffect} from 'react';
import ItemList from './ItemList';
import { getProducts } from '../Products'


const ItemListContainer = () => {

  const [products, setProducts] = useState([])

    useEffect(() => {
      const list = getProducts()
      list.then(response => {
        setProducts(response)
      })
    }, [])


   return (
           <div>
                <ItemList products={products} />
           </div>
          );
  }

  export default ItemListContainer