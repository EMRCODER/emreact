import React,{ useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import ItemList from './ItemList';


function getDetails(){
  return new Promise((resolve, reject) =>{
    const object = [{
      id:'1',
      title:'Coca-Cola',
      price:'70',
      pictureUrl:'https://www.coca-colacompany.com/content/dam/journey/au/en/brand-detail/coca-cola/Large_product_shot_Coca-Cola_Classic_updated.png',
      stock:'20',
      desc:'Gaseosa a base de estractos vegetales, sabor cola. 485 cc',
      cat:'Bebidas',
      minOrd:'60',
    }]
      setTimeout(() => resolve(object), 2000 )

  })
}


const ItemDetailContainer = (props) => {

    const [Product, setProduct] = useState([])

    useEffect(() => {
      const list = getDetails()
      list.then(response => {
        setProduct(response);
        
      })
    }, [])


   return (
          <div>
                {Product.length!==0 ? (
                 <div>
                    <ItemDetail Product={Product[0]} />
                   
                </div>
                ):(<h1>CARGANDO</h1>)}
          </div>
          );
  }

  export default ItemDetailContainer