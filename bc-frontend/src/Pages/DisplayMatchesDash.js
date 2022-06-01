import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import Users from './Users'

const DisplayMatchesDash = (props) => {
    
    const selectedUser = () => {
    return props.users.map((user) => (
        <div key={user._id} className='user'>
                <h3>{user.firstName}</h3>
                <h5>{user._id}</h5> 
        </div>
        ))
    }
    const loading = () => {
      return <h1>Loading all users......</h1>
    }

  console.log(props.users)
  
return (
  <section>
      <h2>Welcome to your Match Dash</h2>
      <h4>Testing Display All Users </h4>
      {props.users ? selectedUser() : loading()}
  </section>
);
}


export default DisplayMatchesDash