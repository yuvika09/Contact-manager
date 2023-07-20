import React from 'react';
import { Link } from 'react-router-dom';
import './add_contact.css';

const Add_contact = () => {
  return (
    <>
      <h5 className='heading'>Create Contact</h5>
      <div className="cont">
        <form action="">
          <input type="text" placeholder='Name' className='box' />
          <input type="text" placeholder='Photo URL' className='box' />
          <input type="text" placeholder='Mobile' className='box' />
          <input type="text" placeholder='Email' className='box' />
          <input type="text" placeholder='Address' className='box' />
          <input type="text" placeholder='Group' className='box' />
          <select className='option'>
            <option value="">Select a group</option>
          </select>
          <div className="sec-btns">
            <button className='create-btn' typeof='submit'>Create</button>
            <Link to={'/contacts/list'}><button className='close-btn'>Cancel</button></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add_contact