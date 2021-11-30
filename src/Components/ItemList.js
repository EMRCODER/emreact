import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {

    return (
        <div>
            <ul className="d-inline-flex" style={{listStyleType:'none'}}>
                {items.map(i => <li key={i.id}><Item id={i.id} title={i.name} price={i.price} stock={i.stock} pictureUrl={i.pictureUrl} /></li>)}
            </ul>               
        </div>
    )
}

export default ItemList

