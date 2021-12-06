import React,{ useState, useEffect} from 'react';

export default function ItemDetail ({Product})  {
    const [Name, setName] = useState(Product.title);
    const [Price, setPrice] = useState(Product.price);
    const [Img, setImg] = useState(Product.pictureUrl);
    const [Stock, setStock] = useState(parseInt(Product.stock));
    const [Descrip, setDescrip] = useState((Product.desc));
    const [category, setcategory] = useState((Product.cat));
    const [MinOrder, setsetMinOrder] = useState(parseInt(Product.minOrd));
    console.log('PRODUCT')
    console.log(Product)
    return (
        <div>
            <div id={Product.id} className='border p-4 m-3'>
                <div>
                        <h4>{Name}</h4>
                        <h6>{category}</h6> 
                        <img className='mt-2' src={Img} style={{width:100},{maxHeight: 100}} ></img>  
                        <h3>{Price} $</h3> 
                        <p>{Descrip}</p> 
                        <div className='bg-black mt-3 mb-0 p-1' >
                            <h6 style={{color:'white'}}> Stock: {Stock}  </h6>
                        </div>
                        <h3>{MinOrder} unidades como mínimo</h3> 
                            
                </div>        
            </div>
            
        </div>
    )
}

