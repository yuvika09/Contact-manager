import React from 'react';
import { Link } from 'react-router-dom';
import './view_contact.css';

const View_contact = () => {
  return (
    <>
      <div className="big-container">
        <div className="small-container">
          <img src="https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png" alt="pp" />
          <ul>
            <li>Name : <span className='detail'>Yuvika Singh</span></li>
            <li>Mobile : <span className='detail'>9236148929</span></li>
            <li>Email : <span className='detail'>yuvikasingh17@gmail.com</span></li>
            <li>Address : <span className='detail'>yuvikil.com</span></li>
            <li>Title : <span className='detail'>yuvikaom</span></li>
            <li>Group : <span className='detail'>Family</span></li>
            <Link to={'/contacts/list'}><button className='back-btn'>Cancel</button></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default View_contact