import React, { useState } from 'react';

const Shipment = () => {
    const [name, setName] = useState('') ;
    const [email, setEmail] = useState('') ;
    const [phone , setphone] = useState('') ;
    const [address, setAddress] = useState('') ;
    const [error, setError] = useState('') ;
    const handleNameBlur = event => {
        setName (event.target.value) ;
    }
    const handleEmailBlur = event => {
        setEmail (event.target.value) ;
    }
    const handlephoneBlur = event => {
        setphone (event.target.value) ;
    }
    const  handleAddressBlur = event => {
            setAddress (event.target.value) ;
        }
        const handleCreateUser = event => {
            event.preventDefault ();
            }
    return (
       <form action="">
            <div className='form-container'>
        <div>
        <h2 className='form-title'>Shipping Information</h2>
          <form onSubmit={handleCreateUser}>
          <div className='input-group'>
             <label htmlFor="name">Your Name</label>
         <input onBlur={handleNameBlur} type="text" name='name' id='' required />
              </div>  
          <div className='input-group'>
             <label htmlFor="email">Your Email</label>
             <input onBlur={handleEmailBlur} type="email" name='email' id='' required />
              </div>  
          <div className='input-group'>
             <label htmlFor="phone">Phone Number</label>
             <input onBlur={handlephoneBlur} type="text" name='phone' id='' required/>
              </div>  
          <div className='input-group'>
             <label htmlFor="address">Address</label>
             <input onBlur={handleAddressBlur} type="text" name='address' id='' required />
              </div>  
             <p style={{color:'red'}}>{error}</p>
              <input className='form-submit' type="submit" value="Add Shipping" />
          </form>
        </div>
    </div>
       </form>
    );
};

export default Shipment;