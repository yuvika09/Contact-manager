import React from 'react';
import { Link } from 'react-router-dom';
import './edit_contacts.css';

const Edit_contact = () => {
  return (
    <> 
      <h5 className='heading'>Edit Contact</h5>
      <div className="new-container">
        <form>
          <input type="text" placeholder='Name' className='box' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUz5EWKDu-QHOR3ym0eWBSQenc69_kODInRA&usqp=CAU" alt="picsa" />
          <input type="text" placeholder='Photo URL' className='box' />
          <input type="text" placeholder='Mobile' className='box' />
          <input type="text" placeholder='Email' className='box' />
          <input type="text" placeholder='Address' className='box' />
          <input type="text" placeholder='Title' className='box' />
          <select className='option'>
            <option value="">Select a group</option>
          </select>
          <div className="sec-btns">
            <button className='create-btn' typeof='submit'>Update</button>
            <Link to={'/contacts/list'}><button className='close-btn'>Cancel</button></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Edit_contact