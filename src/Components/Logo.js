import React from "react"
import logoEMR from '../img/logoEMR.png'
import {Link} from 'react-router-dom'

class Logo extends React.Component {
    render (){
          return (
                <Link to={'/'} className='nav-link text-white' ><img style={{position:'absolute', left:'10px', top:'5px'}}  className="rounded-circle " width="150" src={logoEMR} /></Link>
            
    );
  }
}

  export default Logo