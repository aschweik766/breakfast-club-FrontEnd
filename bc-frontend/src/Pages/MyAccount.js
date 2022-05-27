import React, { useState, useEffect } from 'react'
import './MyAccount.css'
import { Link } from 'react-router-dom'
// import SignUp from './SignUp'
// import { Routes, Route } from 'react-router-dom'
// import App from '../App'
// import EditProfile from './EditProfile'


function MyAccount({ users }) {
  // console.log(user)

  return (
    <div className='body'>
      <div className='page-cont'>
        <div className='sidebar'>
          <img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='default-img' />
        </div>
        <div className='acct-header'>
          <div className='myacct-cont'>
            <h2>My Account</h2>
            <Link to={`/myaccount/${users._id}`} > <button>Update Preferences </button> </Link>
          </div>
          <h3>{users.firstName}, {users.birthday} - {users.location}</h3>
          <h4>Sun: Leo - Moon: Virgo - Rising: Sagittarius</h4>
          <h4>Bio</h4>
          <p>Human-focused programmer with a desire to produce compassionate, engaging, and empowering work that brings users closer to themselves and builds community. Skilled creative with experience in a variety of mediums, giving them a singular approach to work, life, and communication.</p>
          <h4>Dating Prefs</h4>
          <p>
            Age:<br />
            Location:<br />
            Sign:<br />
            Interests:<br />
          </p>
          <h4>Photos</h4>
          <div className='photos'>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default MyAccount