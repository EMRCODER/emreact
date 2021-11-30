import React from "react"
import logoEMR from '../img/logoEMR.png'

class Logo extends React.Component {
    render (){
          return (

            <img style={{position:'absolute', left:'10px', top:'5px'}}  className="rounded-circle " width="150" src={logoEMR} />    
        
    );
  }
}

  export default Logo