import React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail ({Product})  {
    const onAdd =(num) => {console.log(num + ' ítems en el carrito')}
    return (
        <div>
            <div id={Product.id} className='border p-4 m-3'>
                <div>
                        <h4>{Product.title}</h4>
                        <h6>{Product.cat}</h6> 
                        <img className='mt-2' src={Product.pictureUrl} style={{width:100},{maxHeight: 100}} ></img>  
                        <h3>{Product.price} $</h3> 
                        <p>{Product.desc}</p> 
                        <h6>Pedidos de {Product.minOrd} unidades como mínimo</h6> 
                        <ItemCount stock={Product.stock} initial={1} onAdd={onAdd}/>
                </div>        
            </div>
            
        </div>
    )
}

