import React from 'react'
import './styles/navbar.scss'
import FreeDelivery from '../../src/images/free-delivery.png';

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='logo'>BRUNCHY</div>

                <div className='nav-items'>
                    <a className='first-link' href="https://dreamshot.bg">About</a>
                    <a href="https://dreamshot.bg">Call Us</a>
                    <img className='free-delivery' src={FreeDelivery} />
                </div>
            </nav>
            <div className='free-delivery-small-screen'>

            <img  src={FreeDelivery} />
            </div>
        </>
    )
}

export default Navbar