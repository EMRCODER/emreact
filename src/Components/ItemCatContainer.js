import React,{ useState, useEffect} from 'react';
import ItemList from './ItemList';
import { getProductByCat } from '../Products'
import {useParams} from 'react-router-dom'


const ItemCatContainer = () => {

  const [products, setProducts] = useState([])
  const { paramId } = useParams()
  
    useEffect(() => {
      getProductByCat(paramId).then(cat => {
        setProducts(cat);
      })
    }, [paramId])

   return (
           <div>
                <ItemList products={products} />
           </div>
          );
  }

  export default ItemCatContainer