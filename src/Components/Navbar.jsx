import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
 
const Navbar = () => {
    return (
        <>
            <div className="main-nav">
            <Link to={'/'}><i class="fa-solid fa-address-book" id='home-btn'></i></Link>
                <p className='title'>Contact Manager</p>
            </div>
        </>
    )
}

export default Navbar