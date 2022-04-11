import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init' ;

const SignUp = () => {
    const [email, setEmail] = useState('') ;
    const [password , setPassword] = useState('') ;
    const [confirmPassword, setConfirmPassword] = useState('') ;
    const [error, setError] = useState('') ;
    const navigate = useNavigate() ;
    const [createUserWithEmailAndPassword, hookError , user , loading] = useCreateUserWithEmailAndPassword(auth) ;
    const handleEmailBlur = event => {
        setEmail (event.target.value) ;
    }
    const handlePasswordBlur = event => {
        setPassword (event.target.value) ;
    }
    const  handleConfirmPassword = event => {
            setConfirmPassword (event.target.value) ;
        }
        if (error) {
            return (
              <div>
                <p>Error: {error?.message}</p>
              </div>
            );
          }
          if (loading) {
            return <p>Loading...</p>;
          }
        if (user) {
            navigate('/shop') ;
        }
    const handleCreateUser = event => {
        event.preventDefault ();
        if (password !== confirmPassword){
            setError ('your password did not match') ;
            return ;
        }
        if (password <6) {
            setError ('password must be 6 characters or longer') ;
            return ;
        }
        createUserWithEmailAndPassword (email, password)
        .then (result =>{
            // const user = result.user ;
            console.log ('user created') ;
        })
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sing Up</h2>
          <form onSubmit={handleCreateUser}>
          <div className='input-group'>
             <label htmlFor="email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name='email' id='' />
              </div>  
          <div className='input-group'>
             <label htmlFor="password">Password</label>
             <input onBlur={handlePasswordBlur} type="password" name='password' id='' />
              </div>  
          <div className='input-group'>
             <label htmlFor="confirm-password">Confirm Password</label>
             <input onBlur={handleConfirmPassword} type="confirm-password" name='confirm-password' id='' />
              </div>  
              <p style={{color:'red'}}>{error || hookError}</p>
              <input className='form-submit' type="submit" value="Sing Up" />
          </form>
          <p>
             Already Have account? <Link className='form-link' to='/login'>Login</Link>
          </p>
        </div>
    </div>
    );
};

export default SignUp;