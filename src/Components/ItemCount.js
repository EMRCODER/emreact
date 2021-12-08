import React,{Component, useState, useEffect} from 'react';
import {render} from 'react-dom';




const ItemCount = ({name, stock, initial, onAdd}) => {
    const [Name, setName] = useState(name);
    const [Count, setCount] = useState(parseInt(initial));
    const [Stock, setStock] = useState(parseInt(stock));
    let [ItemsToCart, setItemsToCart] = useState(0);

   return (

      <div >
            <div className="col-auto text-center">
            
                    <h4>{Name}</h4>  
                    <ul className="d-inline-flex mt-2" >
                        <button style={{width:'3vw'}} onClick={()=> setCount(Count===0 ? 0 : Count-1 )  }  > - </button> 
                        <p className="d-inline-flex m-3" >  {Count}  </p>
                        <button style={{width:'3vw'}} onClick={()=> setCount(Count===Stock ? Count : Count+1 )  }  > + </button>
                    </ul>             
                    <h5 style={{color:'green'}}> Stock: {Stock}  </h5>

                    <button className="mt-1 mb-4" style={{width:'15vw'}} onClick={()=> {setItemsToCart(Count+ItemsToCart); setStock(Stock-Count); setCount(0);{onAdd(Count+ItemsToCart)}}}  > Agregar a carrito </button>
                    <h5> En carrito: {ItemsToCart}  </h5>
            </div>        
      </div>
);
}

export default ItemCount