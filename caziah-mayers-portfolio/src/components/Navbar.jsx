import React from 'react'
import '../styles/style-navbar.css'
import Navbutton from './Navbutton'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-left'>
                <p>Caziah Mayers</p>
            </div>
            <div className='navbar-right'>
                <Navbutton pageName={'About'}></Navbutton>
                <Navbutton pageName={'Projects'}></Navbutton>
                <Navbutton pageName={'Contact'}></Navbutton>
            </div>
        </div>
    )
}

export default Navbar