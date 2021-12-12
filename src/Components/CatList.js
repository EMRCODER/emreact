import React from 'react';
import {Link} from 'react-router-dom'

const CatList = ({ categories = []}) => {
 
    return (
        <div>
            <ul className="d-inline-flex" style={{listStyleType:'none'}}>
                  {categories.map(category =><Link key={category.id} to={'/category/'+category.id} className='nav-link text-white' >{category.desc}</Link> )}
                   
            </ul>               
        </div>
    )
}

export default CatList

