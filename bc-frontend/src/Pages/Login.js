import React, { useState } from 'react'
import './SignUp.css'

function Login({ users }) {
if (!users) {
    return( <h1>No Users</h1>)
}

    const loginInitialState = {
        username: '',
        password: '',
    }

    const [login, setLogin] = useState(loginInitialState);

    const handleChange = (event) => {
        setLogin({ ...login, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        // console.log(setLogin);
        users.map((user) => {
            if ((login.username === user.username) && (login.password === user.password)) {
                // console.log(user)
                setLogin(user);
                // setUser(oneUser);
            }
            return(null)
        })
    }

    console.log(login.zodiacSign)

//     function findUser (x) { 
//         users.map((oneUser) => {
//         if ((login.username === oneUser.username) && (login.password === oneUser.password)) {
//             // console.log(user)
//             setUser(oneUser);
//             console.log(user)
//         }
//         return(null)
//     })
// }


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