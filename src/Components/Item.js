import React,{useState} from 'react';

const Item = ({id, title, price, pictureUrl,stock}) => {
    const [Name, setName] = useState(title);
    const [Price, setPrice] = useState(price);
    const [Img, setImg] = useState(pictureUrl);
    const [Stock, setStock] = useState(parseInt(stock));
    
    return (
        
        <div id={id} className='border p-4 m-3'>
              <div>
                    <h4>{Name}</h4>
                    <img className='mt-2' src={Img} style={{width:100},{maxHeight: 100}} ></img>  
                    <h3>{Price} $</h3> 
                    <button> Ver detalle</button>
                    <div className='bg-black mt-3 mb-0 p-1' >
                        <h6 style={{color:'white'}}> Stock: {Stock}  </h6>
                    </div>    
              </div>        
        </div>
    )
}

export default Item
