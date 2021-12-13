import React,{useState} from 'react';
import {Link} from 'react-router-dom'

const InputCount = ({onConfirm, maxQuantity, minQuantity}) => {
    const [count, setCount] = useState(0)
    
        const handleChange = ({target}) => {
              
        if( target.value < maxQuantity && target.value > 0) {
            setCount(target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
       
            {(count >= parseInt(minQuantity)) ? <button onClick={() => onConfirm(count)}>Agregar al carrito</button> : <button style={{color:'red'}}>Cantidad insuficiente</button>} 
            
        </div>
    )
}

const ButtonCount = ({ onConfirm, maxQuantity, minQuantity}) => {
    const [count, setCount] = useState(0)

    const increment = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <p> {count}  </p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>

            {(count >= parseInt(minQuantity)) ? <button onClick={() => onConfirm(count)}>Agregar al carrito</button> : <button style={{color:'red'}}>Cantidad insuficiente</button>} 
           
        </div>
        
    )
}



export default function ItemDetail ({product, inputType= 'input'})  {
    const [cartCount, setCartCount] = useState(0)
    const ItemCount = inputType === 'input' ? InputCount : ButtonCount
    const onAdd =(num) => {console.log(num + ' ítems agregados al carrito'); setCartCount(num);}
    const onConfirmCart =(num) => {console.log(num + ' ítems confirmados en el carrito')}
    
    
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
                        {/* <ItemCount stock={product?.stock} initial={product?.minOrd} onAdd={onAdd}/> */}
                        <div className="col-auto text-center">
                        
                        <h4>{product?.name}</h4>  
                            <ul className="d-inline-flex mt-2" >
                                 {(cartCount > 0) ?  <p></p> : <ItemCount onConfirm={onAdd} maxQuantity={product?.stock}  minQuantity={product?.minOrd}/> }
                            </ul>             
                            <h5 style={{color:'green'}}> Stock: {product?.stock}  </h5>
                        </div>        
                </div>   
                  
            </div>
            <footer className='ItemFooter'>
                <h5> En carrito: {cartCount}  </h5>
                <Link  to={'/cart'} >  <button onClick={() => {onConfirmCart(cartCount)}}>Terminar mi compra</button>  </Link>   
            </footer>
            
        </div>
    )
}

