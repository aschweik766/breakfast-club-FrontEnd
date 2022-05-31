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
import Footer from "./components/Footer";
/* eslint-disable */

//structure:
//app
//head
//main state: users
//routes
//route path: / <User props: user, createUser>
//route path: /user/:id <Show props: user, updateuser, deleteUser>

function App() {
  const [users, setUsers] = useState(null);
  const url = "http://localhost:3001/users";

  const [dailyHoro, setDailyHoro] = useState(null)
  const [dailyLove, setDailyLove] = useState(null)
  const [compatibility, setCompatibility] =useState(null)
  const [weeklyHoro, setWeeklyHoro] = useState(null)
  const [weeklyLove, setWeeklyLove] = useState(null)
  const [monthlyHoro, setMonthlyHoro] = useState(null)
  const [monthlyLove, setMonthlyLove] = useState(null)
  const [dailyCareer, setDailyCareer] = useState(null)
  const [weeklyCareer, setWeeklyCareer] = useState(null)
  const [monthlyCareer, setMonthlyCareer] = useState(null)
  
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

  function dailyHoroscope() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "daily-horoscopes1.p.rapidapi.com",
        "X-RapidAPI-Key": "edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1",
      },
    };
    fetch("https://daily-horoscopes1.p.rapidapi.com/", options)
      .then((response) => response.json())
      .then((response) => setDailyHoro(response))
      .catch((err) => console.error(err));
  }


function dailyLoveHoro(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };

  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-love/${userSign}/today`, options)
    .then(response => response.json())
    .then(response => setDailyLove(response))
    .catch(err => console.error(err));
}

//trying my hand at a love match function that we could pull in the dating part
function matchCompatibility() {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'devbrewer-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'e5003d0b92msha0898f0c18e9287p1c5a94jsn9e9de59e6eb3'
    }
  };
  fetch(`https://devbrewer-horoscope.p.rapidapi.com/match/Aries/Leo`, options)
  .then(response => response.json())
  .then(response => setCompatibility(response))
  .catch(err => console.error(err));
}

function weeklyHoroscope(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-weekly/${userSign}`, options)
    .then(response => response.json())
    .then(response => setWeeklyHoro(response))
    .catch(err => console.error(err));
}

function weeklyLoveHoro(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-love-weekly/${userSign}/single`, options)
    .then(response => response.json())
    .then(response => setWeeklyLove(response))
    .catch(err => console.error(err));
}

function monthlyHoroscope(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-monthly/${userSign}`, options)
    .then(response => response.json())
    .then(response => setMonthlyHoro(response))
    .catch(err => console.error(err));
}

function monthlyLoveHoro(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-love-monthly/${userSign}/single`, options)
    .then(response => response.json())
    .then(response => setMonthlyLove(response))
    .catch(err => console.error(err));
}

function dailyCareerHoro(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-career/${userSign}/today`, options)
    .then(response => response.json())
    .then(response => setDailyCareer(response))
    .catch(err => console.error(err));
}

function weeklyCareerHoro(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-career-weekly/${userSign}`, options)
    .then(response => response.json())
    .then(response => setWeeklyCareer(response))
    .catch(err => console.error(err));
}

function monthlyCareerHoro(userSign) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
      'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
    }
  };
  
  fetch(`https://astro-daily-live-horoscope.p.rapidapi.com/horoscope-career-monthly/${userSign}`, options)
    .then(response => response.json())
    .then(response => setMonthlyCareer(response))
    .catch(err => console.error(err));
}



  useEffect(() => {
    dailyHoroscope()
    dailyLoveHoro("aries")
    weeklyHoroscope("aries")
    weeklyLoveHoro("aries")
    monthlyHoroscope("aries")
    monthlyLoveHoro("aries")
    dailyCareerHoro("aries")
    weeklyCareerHoro("aries")
    monthlyCareerHoro("aries")
    getUsers()
  }, [])

  // if (!users) {
  //   return <h1></h1>;
  // }
  // console.log('these are the users:', users);

  // console.log(dailyLove)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home dailyHoro={dailyHoro} dailyLove={dailyLove}/>} />
        <Route path="/myaccount" element={<MyAccount users={users} />} />
        <Route path="/signup" element={<SignUp users={users} createUsers={createUsers} />} />
        <Route path="/users/:id" element={<EditProfile updateUsers={updateUsers} deleteUsers={deleteUsers} /> } />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users users={users} createUsers={createUsers} />} />
        <Route path='/horoscope' element={<Horoscope dailyHoro={dailyHoro} dailyLove={dailyLove} weeklyHoro={weeklyHoro} weeklyLove={weeklyLove} monthlyHoro={monthlyHoro} monthlyLove={monthlyLove} dailyCareer={dailyCareer} weeklyCareer={weeklyCareer} monthlyCareer={monthlyCareer}/> } />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;