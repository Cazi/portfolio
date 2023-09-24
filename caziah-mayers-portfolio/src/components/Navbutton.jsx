import React from 'react'
import '../styles/style-navbutton.css'
const Navbutton = ({ pageName }) => {
    return (
        <div className='nav-button'>
            <a href="#" class="btn btn-white btn-animate">{pageName}</a>
        </div>
    )
}

export default Navbutton