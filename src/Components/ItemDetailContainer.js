import React,{ useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { getProductById } from '../Products'
import {useParams} from 'react-router-dom'


const ItemDetailContainer = () => {
    const [inputType, setInputType] = useState('button')
    const [product, setProduct] = useState([])
    const { paramId } = useParams()

    useEffect(() => {
      getProductById(paramId).then(item => {
        setProduct(item);
      })
    }, [paramId])



   return (
          <div>
                {product.length!==0 ? (
                  
                 <div>
                            <ItemDetail  product={product} inputType={inputType}/></div>
                ):(<h1>CARGANDO</h1>)}
          </div>
          );
  }

  export default ItemDetailContainer