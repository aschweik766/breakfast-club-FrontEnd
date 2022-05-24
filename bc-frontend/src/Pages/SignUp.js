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
    const [signUpState, setSignUpState] = useState(initialState)

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
        <form className='signUpForm' onSubmit={handleSubmit}>
            <h3>Sign Up Form</h3>
            <br></br>

            <label htmlFor="fullName">Full Name: </label>
            <input type="text" id='fullName'></input>
            <br></br>

            <label htmlFor="email">Email: </label>
            <input type="text" id='email'></input>
            <br></br>

            <label htmlFor="username">Username: </label>
            <input type="text" id='username'></input>
            <br></br>

            <label htmlFor="password">Password: </label>
            <input type="text" id='password' placeholder='must be at least 8 characters'></input>
            <br></br>
            <button>Submit</button>
        </form>
    )
}

export default SignUp