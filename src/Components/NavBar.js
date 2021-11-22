import React from "react"
import Logo from './Logo.js'
import CartWidget from "./CartWidget.js";

class Navbar extends React.Component {
    render (){
          return (

        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="d-flex justify-content-center " style={{width:'100vw'}}>
                <Logo />
                <ul className="d-inline-flex mt-2" >
                    <li className="nav-item"><a class="nav-link text-white" href="#">Electrónica</a></li>
                    <li className="nav-item"><a class="nav-link text-white" href="#">Bebidas</a></li>
                    <li className="nav-item"><a class="nav-link text-white" href="#">Limpieza</a></li>
                </ul>
                <CartWidget cantidad={'4'} />


              </div>
        </nav>
      
    );
  }
}

  export default Navbar