import React, { useEffect, useState } from 'react'
import './SignUp.css'
function SignUp(props) {

    //Step 1. Start with an Object in State: When working with forms, it's helpful to have all of the values in a single object.

    const userInitialState = {
        firstName: '',
        lastName: '',
        email: '',
        userName: '',
        password: '',
        location: '',
        birthday: '',
        birthTime: ''
    }
    
    const [user, setUser] = useState(null)


    const [userSignUp, setUserSignUp] = useState(userInitialState)
    
    const url = "http://localhost:3001/users";

    const createUrl = `http://localhost:3001/signup`

    function getUsers() {
        fetch(url)
          .then((res) => res.json())
          .then((res) => setUser(res))
          .catch(console.error);
      }
    
      const createUsers = async (user) => {
        // make post request to create people
        await fetch(createUrl, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        // update list of users
        getUsers();
      };

    const handleChange = (event) => {
        setUserSignUp({ ...userSignUp, [event.target.id]: event.target.value });
    };

    // Event Handler: a callback function to
    // be run when the event is observed
    const handleSubmit = (event) => {
        // we always need to stop the browser
        // from submitting the form or the page
        // will be refreshed.
        event.preventDefault();
        // do something with the data in the component state
        props.createUsers(userSignUp);
        // clear the form
        setUserSignUp(userInitialState)
    };

    useEffect(() => {
        getUsers()
        createUsers()
    }, [])


    if (!user) {
        return <h1>....Hard at work to sign you up</h1>;
    }
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

            <br></br>
            <form className='signUpForm' onSubmit={handleSubmit}>

                {/* firstName: '',
                    lastName: '',
                    email: '',
                    userName: '',
                    password: '',
                    location: '',
                    birthday: '',
                    birthTime: '' */}

                <h3>Sign Up Form</h3>

                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" onChange={handleChange} value={userSignUp.firstName}></input>
                <br></br>

                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" onChange={handleChange} value={userSignUp.lastName}></input>
                <br></br>

                <label htmlFor="email">Email: </label>
                <input type="text" id='email' onChange={handleChange} value={userSignUp.email}></input>
                <br></br>

                <label htmlFor="userName">Username: </label>
                <input type="text" id='userName' onChange={ handleChange } value={userSignUp.userName}></input>
                <br></br>

                <label htmlFor="password">Password: </label>
                <input type="text" id='password' placeholder='must be at least 8 characters' onChange={ handleChange } value={userSignUp.password}></input>
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

                <button action="http://localhost:3001/users">Submit </button>
{/* this button aciton isnt working i'm trying to figure out how to redirect once the button is clicked i can go back to /users */}
            </form>
        </div>
    )
}

export default SignUp