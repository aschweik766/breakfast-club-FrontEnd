import React, { useState } from 'react'
import './SignUp.css'

function Login() {

    const loginInitialState = {
        username: '',
        password: ''
    }

    const [login, setLogin] = useState(loginInitialState)

    const handleChange = (event) => {
        setLogin({ ...login, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(setLogin);
        setLogin(loginInitialState);
    };

    return (
        <div>
            <form className='signUpForm' onSubmit={handleSubmit}>

                {/* 
                username: '',
                password: '' 
                */}

                <h3>Login</h3>

                <label htmlFor="username">Username: </label>
                <input type="text" id='username' onChange={ handleChange } value={login.username}></input>

                <br></br>

                <label htmlFor="password">Password: </label>
                <input type="text" id='password' onChange={handleChange} value={login.password}></input>

                <br></br>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Login