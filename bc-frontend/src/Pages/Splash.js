import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Splash({ users, handleChange, handleSubmit, login } ) {
  return (
    <div>
        <h1>Hello! Welcome to Align.</h1>
        <h3>Align is a relationship resource that utilizes the principles of astrological compatibility to connect you to people who are the most aligned with you.</h3>
        <br/>
        <p>Already have an account? Log in below:</p>
    <Login users={users} handleChange={handleChange} handleSubmit={handleSubmit} login={login} />
    <br/><br/>
        <p>Or, click <Link to='/signup'>here</Link> to sign up</p>
    </div>
  )
}

export default Splash