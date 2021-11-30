import React,{ useState, useEffect} from 'react';
import ItemList from './ItemList';

function getItems(){
  return new Promise((resolve, reject) =>{
    const object = [{
      id:'1',
      title:'Coca-Cola',
      price:'70',
      pictureUrl:'https://www.coca-colacompany.com/content/dam/journey/au/en/brand-detail/coca-cola/Large_product_shot_Coca-Cola_Classic_updated.png',
      stock:'20',
    },
    {
      id:'2',
      title:'Papas Lays',
      price:'350',
      pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_681062-MLA43242723836_082020-O.jpg',
      stock:'30',
    },
    {
      id:'3',
      title:'Oreo Box',
      price:'280',
      pictureUrl:'https://images-na.ssl-images-amazon.com/images/I/51Ms0pNXUiL._SX300_SY300_QL70_FMwebp_.jpg',
      stock:'10',
    }]
      setTimeout(() => resolve(object), 3000 )

  })
}


const ItemListContainer = (props) => {

/*   const onAdd =(num) => {console.log(num + ' ítems en el carrito')} */

    const [listProduct, setListProduct] = useState([])

    useEffect(() => {
      const list = getItems()
      list.then(response => {
        setListProduct(response)
      })
    }, [])


   return (
           <div>
                <ItemList items={listProduct} />
                {/*      <ItemCount name='Producto X' stock='10' initial='1' onAdd={onAdd} />  */}
           </div>
          );
  }

  export default ItemListContainer