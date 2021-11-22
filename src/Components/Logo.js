import React from "react"
import logoEMR from '../img/logoEMR.png'

class Logo extends React.Component {
    render (){
          return (

            <img style={{position:'absolute', left:'40px', top:'15px'}}  className="rounded-circle " width="50" src={logoEMR} />    
        
    );
  }
}

  export default Logo