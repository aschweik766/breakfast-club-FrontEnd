import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyAccount from "./Pages/MyAccount";
import SignUp from "./Pages/SignUp";
import EditProfile from "./Pages/EditProfile";
import Login from "./Pages/Login";
// import Main from './components/Main';
import Header from "./components/Header";
import Users from './Pages/Users'
import Horoscope from "./Pages/Horoscope";
 
//structure:
//app
//head
//main state: users
//routes
//route path: / <User props: user, createUser>
//route path: /user/:id <Show props: user, updateuser, deleteUser>
function App() {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:3001/users";
  const [horoscope, setHoroscope] = useState(null)
  function getUsers() {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch(console.error);
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
    });
    getUsers();
  };
  const deleteUsers = async (id) => {
    await fetch(url + id, {
      method: "delete",
    });
    getUsers();
  };
  useEffect(() => getUsers(), []);
  if (!users) {
    return <h1>....loading</h1>;
  }
  console.log(`these are the users: ${users}`);
  
  function getHoroscope() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "daily-horoscopes1.p.rapidapi.com",
        "X-RapidAPI-Key": "edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1",
      },
    };
    fetch("https://daily-horoscopes1.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => setHoroscope(response))
      .catch((err) => console.error(err));
  }

    useEffect(() => getHoroscope(), []);


  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/starchart' element={<StarChart />}/> */}
        <Route path="/myaccount" element={<MyAccount users={users} />} />
        <Route path="/signup" element={<SignUp users={users} />} />
        <Route
          path="/users/:id"
          element={
            <EditProfile updateUsers={updateUsers} deleteUsers={deleteUsers} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/users"
          element={<Users users={users} createUsers={createUsers} />} />
         <Route path='/horoscope' element={<Horoscope horoscope={horoscope} /> } />
      </Routes>
    </div>
  );
}
export default App;