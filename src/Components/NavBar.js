import React,{ useState, useEffect} from 'react';
import Logo from './Logo.js'
import CartWidget from "./CartWidget.js";
import CatList from "./CatList.js";
import ItemDetail from "./ItemDetail.js";
import {Link} from 'react-router-dom'
import { getCategories } from '../Products'

const Navbar = () => {
  
    
      const [categories, setCategories] = useState([])

      useEffect(() => {
        const list = getCategories()
        list.then(response => {
          setCategories(response)
        })
      }, [])

      return (

        <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <div className="d-flex justify-content-center " style={{width:'100vw'}}>
                <Logo />
                <ul className="d-inline-flex mt-2" >
                    <Link to={'/'} className='nav-link text-white' >Home</Link>
                    <CatList categories={categories} />
                </ul>
                <CartWidget cantidad={ItemDetail.cartCount} />

              </div>
        </nav>
      
    );
  }


  export default Navbar