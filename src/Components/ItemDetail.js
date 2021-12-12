import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail ({product})  {
    const onAdd =(num) => {console.log(num + ' ítems en el carrito')}
    return (
        <div>
            <div id={product?.id} className='border p-4 m-3'>
                <div>
                        <h4>{product?.title}</h4>
                        <h6>{product?.cat}</h6> 
                        <img className='mt-2' src={product?.pictureUrl} style={{width:100},{maxHeight: 100}} ></img>  
                        <h3>{product?.price} $</h3> 
                        <p>{product?.desc}</p> 
                        <h6>Pedidos de {product?.minOrd} unidades como mínimo</h6> 
                        <ItemCount stock={product?.stock} initial={product?.minOrd} onAdd={onAdd}/>
                </div>        
            </div>
            
        </div>
    )
}

