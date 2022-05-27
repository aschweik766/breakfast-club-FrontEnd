import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Users from './Pages/Users'
import EditProfile from './Pages/EditProfile'

const Main = () => {
    const [users, setUsers] = useState([])
    const url = 'http://localhost:3001/users'

    function getUsers () {
        fetch(url)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch(console.error) 
    }

    const createUsers = async (user) => {
        // make post request to create people
        await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
		        body: JSON.stringify(user),
        });
        // update list of users
        getUsers();
    };

    const updateUsers = async (user, id) => {
        await fetch(url + id, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
        getUsers()
    }

    const deleteUsers = async id => {
        await fetch(url + id, {
            method: "delete",
            })
        getUsers()
    }


    useEffect(()=>  getUsers() ,[]);
    

if(!users) {

    return (<h1>....loading</h1> )
}
    console.log(`these are the users: ${users}`)

  return (
    <main>
        <Routes>
            <Route path='/users' element={<Users 
            users={users} 
            createUsers={createUsers}/>}/>

             <Route path='/users/:id' 
             element={<EditProfile
               
              updateUsers={updateUsers} 
              deleteUsers={deleteUsers}/>}/>
        </Routes>
    </main>
  );
}

export default Main