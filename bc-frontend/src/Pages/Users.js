import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Users = (props) => {

    const [userForm, setUserForm] = useState({firstName: ''})

    const handleChange = (event) => {
    setUserForm({ ...userForm, [event.target.firstName]: event.target.value });

}  ;

const handleSubmit = (event) => {
    event.preventDefault();
    props.createUsers(userForm)
    // console.log(editFormState);
    setUserForm({firstName: ''})
}








    // console.log(props)

    const showingUsers = () => {
        return props.users.map((user) => (
            <div key={user._id} className='user'>
                <Link to={`/users/${user._id}`}>
                    <h1>{user.firstName}</h1>
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
         <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={userForm.firstName}
                name="name"
                placeholder="name"
                onChange={handleChange}
            />
            <input type="submit" value="Create User" />
            </form> 
        {props.users ? showingUsers() : loading()}
    </section>
  );
}

export default Users





