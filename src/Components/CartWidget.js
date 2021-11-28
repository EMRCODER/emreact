import React from "react"


const CartWidget = (props) => {
    
          return (

            <a style={{position:'absolute', right:'40px', top:'15px'}} className='text-white'>
                  <div className="mt-1 " style={{width:'auto'}}>
                          <span  className="material-icons md-24">shopping_cart</span>
                          <a>{props.cantidad}</a>
                   </div>
            </a>  
        
    );
  }


  export default CartWidget