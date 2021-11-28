import ItemCount from './ItemCount';
import {useState, useEffect} from 'react';



const ItemListContainer = (props) => {

  const onAdd =(num) => {console.log(num + ' ítems en el carrito')}
          return (
           <div>
              <h2>{props.lista} </h2> 
              <ul className="d-inline-flex mt-2" >

                  <div>
                      <ItemCount name='Producto X' stock='10' initial='1' onAdd={onAdd} />
                  </div>
              </ul>
           </div>
    );
  }

  export default ItemListContainer