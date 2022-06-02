import React from 'react'
// import { useState } from 'react'
// import { useNavigate, Routes, Route } from 'react-router-dom';
import './SignUp.css'
// import App from '../App';
/* eslint-disable */

function Login({ users, handleChange, handleSubmit, login }) {
if (!users) {
    return( <h1>No Users</h1>)
}

    return (
         
        <div>
            <form className='signUpForm' onSubmit={handleSubmit}>

                {/* <h3>Login</h3> */}
                <br/>

                <label htmlFor="username">Username: </label>
                <input type="text" id='username' onChange={ handleChange } value={login.username}></input>

                <br></br>

                <label htmlFor="password">Password: </label>
                <input type="text" id='password' onChange={ handleChange } value={login.password}></input>

                <br/><br/>

                <button className='submitButton' type='submit'>Log In</button>

            </form>
        

        </div>
    )
    
}

export default Login