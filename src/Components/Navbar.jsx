import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="main-nav">
                <i class="fa-solid fa-address-book"></i>
                <p className='title'>Contact Manager</p>
            </div>
            <div className="container">
                <p className='text'>Click the button to add new contact in the directory....</p>
                <Link to={'/contacts/add'}><button className='btn' id='add-btn'><i class="fa-solid fa-circle-plus"></i>Add</button></Link>
            </div>
            <div className="search-cont">
                <form action="">
                    <input type="text" placeholder='Search name...' className='search-box' />
                    <button className='btn' id='search-btn'>Search</button>
                </form>
            </div>
        </>
    )
}

export default Navbar