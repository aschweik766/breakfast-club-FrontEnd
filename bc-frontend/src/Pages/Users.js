import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = (props) => {

    const showingUsers = () => {
        return props.users.map((user) => (
            <div key={user._id} className='user'>
                <Link to={`/users/${user._id}`}>
                    <div>
                        <h1>{user.firstName}</h1> <h1>{user.lastName}</h1>
                        </div>
                    <img src={user.image} alt='Users profile headshot' height='100' width='100'/>
                </Link>
            </div>
            )
         )
    }

    const loading = () => {
        return <h1>Loading......</h1>
    }

  return (
    <section>
        {props.users ? showingUsers() : loading()}
    </section>
  );
}

export default Users