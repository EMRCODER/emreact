import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

    return (
        
        <div id={product.id} className='border p-4 m-3'>
              <div>
                    <h4>{product.title}</h4>
                    <img className='mt-2' src={product.pictureUrl} style={{width:100},{maxHeight: 100}} ></img>  
                    <h3>{product.price} $</h3> 
                    <Link to={`/item/${product.id}`}> Ver detalle</Link>
                    <div className='bg-black mt-3 mb-0 p-1' >
                        <h6 style={{color:'white'}}> Stock: {product.stock}  </h6>
                    </div>    
              </div>        
        </div>
    )
}

export default Item
