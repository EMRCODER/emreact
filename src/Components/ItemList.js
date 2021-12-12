import React from 'react';
import Item from './Item';

const ItemList = ({ products = []}) => {
 
    return (
        <div>
            <ul className="d-inline-flex" style={{listStyleType:'none'}}>
                  {products.map(product =><Item key={product.id} product={product}/> )}
            </ul>               
        </div>
    )
}

export default ItemList

