import React from 'react';
import { Link } from 'react-router-dom';
import './contact_list.css';

const Contact_list = () => {
  return (
    <>
    
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

      <div className="big-cont">

        <div className="sm-cont">
          <img src="https://i.pinimg.com/736x/7c/ee/6f/7cee6fa507169843e3430a90dd5377d4.jpg" alt="pp" />
          <ul>
            <li>Name : <span className='detail'>Yuvika Singh</span></li>
            <li>Mobile : <span className='detail'>9236148929</span></li>
            <li>Email : <span className='detail'>yuvikasingh17@gmail.com</span></li>
          </ul>

          <div className="btns">
            <Link to={'/contacts/view/:contactId'}><button className='view-details'><i class="fa-solid fa-eye"></i></button></Link>
            <Link to={'/contacts/edit/:contactId'}><button className='edit-details'><i class="fa-solid fa-pen-to-square"></i></button></Link>
            <button className='del-details'><i class="fa-solid fa-trash"></i></button>
          </div>

        </div>


      </div>
    </>
  )
}

export default Contact_list