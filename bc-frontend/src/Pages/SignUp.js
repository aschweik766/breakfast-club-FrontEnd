import React, { useState } from 'react'
import './SignUp.css'
function SignUp() {
    //Step 1. Start with an Object in State: When working with forms, it's helpful to have all of the values in a single object.
    const initialState = {
        fullName: '',
        username: '',
        email: '',
        password: ''
    }

    const userInitialState = {
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        location: '',
        birthday: '',
        birthTime: ''
    }
    const [signUpState, setSignUpState] = useState(initialState)

    const [userSignUp, setUserSignUp] = useState(userInitialState)

    const handleChange = (event) => {
        setSignUpState({ ...signUpState, [event.target.id]: event.target.value });
      }; 

    // Event Handler: a callback function to
    // be run when the event is observed
    const handleSubmit = (event) => {
        // we always need to stop the browser
        // from submitting the form or the page
        // will be refreshed.
        event.preventDefault();
        // do something with the data in the component state
        console.log(setSignUpState);
        // clear the form
        setSignUpState(initialState);
    };

    // Event Listener: tells the browser
    // which event to listen for on which
    // element and what to do when the event
    // happens


    return (
        //this one goes with the sign up model 

        // Event Listener: tells the browser
        // which event to listen for on which
        // element and what to do when the event
        // happens
        <div>
        <form className='signUpForm' onSubmit={handleSubmit}>
            <h3>Sign Up Form</h3>
            <br></br>

            <label htmlFor="fullName">Full Name: </label>
            <input type="text" id='fullName' onChange={handleChange} value={signUpState.fullName}></input>
            <br></br>

            <label htmlFor="email">Email: </label>
            <input type="text" id='email' onChange={{handleChange}} value={signUpState.email}></input>
            <br></br>

            <label htmlFor="username">Username: </label>
            <input type="text" id='username' onChange={{handleChange}} value={signUpState.username}></input>
            <br></br>

            <label htmlFor="password">Password: </label>
            <input type="text" id='password' placeholder='must be at least 8 characters' onChange={{handleChange}} value={signUpState.password}></input>
            <br></br>
            <button>Submit</button>
        </form>

<br></br>
        <form className='signUpForm' onSubmit={handleSubmit}>

        {/* email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        location: '',
        birthday: '',
        birthTime: '' */}

<h3>User Sign Up Form</h3>

        <label htmlFor="email">Email: </label>
            <input type="text" id='email' onChange={handleChange} value={userSignUp.email}></input>
            
            <br></br>

            <label htmlFor="username">Username: </label>
            <input type="text" id='username' onChange={{handleChange}} value={userSignUp.username}></input>
            
            <br></br>

            <label htmlFor="password">Password: </label>
            <input type="text" id='password' placeholder='must be at least 8 characters' onChange={{handleChange}} value={userSignUp.password}></input>
            
            <br></br>

            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" onChange={handleChange} value={userSignUp.firstName}></input>
            <br></br>

            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" onChange={handleChange} value={userSignUp.firstName}></input>
            <br></br>

            <label htmlFor="location">Location: </label>
            <input type="text" id="location" onChange={handleChange} value={userSignUp.location}></input>
            <br></br>

            <label htmlFor="birthday">Birthday: </label>
            <input type="text" id="birthday" onChange={handleChange} value={userSignUp.birthday}></input>
            <br></br>

            <label htmlFor="birthTime">Birth Time: </label>
            <input type="text" id="birthTime" onChange={handleChange} value={userSignUp.birthTime}></input>
            <br></br>

            <button>Submit</button>

        </form>
        </div>
    )
}

export default SignUp