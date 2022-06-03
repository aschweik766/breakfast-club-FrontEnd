import "./App.css";
import { Navigate } from "react-router-dom";
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
import Splash from "./Pages/Splash";
import DailyMatchesDash from "./Pages/DisplayMatchesDash";
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
  const createUrl = `http://localhost:3001/signup`

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

  // const createUsers = async (user) => {
  //   // make post request to create people
  //   await fetch(url, {
  //     method: "post",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(user),
  //   });
  //   // update list of users
  //   getUsers();
  // };

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


//LOGIN STUFF

const loginInitialState = {
  username: '',
  password: '',
}

const [login, setLogin] = useState(loginInitialState);
const [loggedIn, setLoggedIn] = useState(false)
const [logData, setLogData] = useState(loginInitialState)
const [noMatch, setNoMatch] = useState(false) //<<< LOGIN incorrect on map

const handleChange = (event) => {
  setLogin({ ...login, [event.target.id]: event.target.value });
  console.log("handle change fired")
};

const handleSubmit = (event) => { 
  event.preventDefault();
  // console.log(setLogin);
  users.map((user) => {
      if ((login.username === user.username) && (login.password === user.password)) {
          setLogin(user);
          setLoggedIn(true);
          localStorage.setItem("username", login.username)
          localStorage.setItem("password", login.password)
      }
    setNoMatch(true)
  } 
  )
}

const zodiac = login.zodiacSign
console.log(zodiac)
// console.log(logData)
// console.log(noMatch)

//END LOGIN STUFF

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

  return (
    <div className="App">
      
      <Header loggedIn={loggedIn}/>
      <Routes>
        {/* <Route path='/app' element={<App users={users}/>} /> */}
        <Route path="/" element={ loggedIn === false ? <Splash users={users} handleChange={handleChange} handleSubmit={handleSubmit} login={login} loggedIn={loggedIn} noMatch={noMatch} /> : <Navigate to='/home' />} />
        
        <Route path="/home" element={loggedIn === false ? <Splash users={users} handleChange={handleChange} handleSubmit={handleSubmit} login={login} loggedIn={loggedIn} noMatch={noMatch} /> : <Home dailyHoro={dailyHoro} dailyLove={dailyLove} login={login}/>} />
        <Route path="/myaccount" element={loggedIn === false ? <Splash users={users} handleChange={handleChange} handleSubmit={handleSubmit} login={login} loggedIn={loggedIn} noMatch={noMatch} /> : <MyAccount users={users} login={login}/>} />
        <Route path="/signup" element={<SignUp users={users} getUsers={getUsers} createUsers={createUsers}/>} />
        <Route path="/users/:id" element={<EditProfile updateUsers={updateUsers} deleteUsers={deleteUsers} login={login} /> } />
        <Route path="/login" element={<Login users={users} handleChange={handleChange} handleSubmit={handleSubmit} login={login} loggedIn={loggedIn} noMatch={noMatch}/>} />
        <Route path="/users" element={<Users users={users} />} />
        <Route path="/horoscope" element={loggedIn === false ? <Splash users={users} handleChange={handleChange} handleSubmit={handleSubmit} login={login} loggedIn={loggedIn} noMatch={noMatch} /> : <Horoscope dailyHoro={dailyHoro} dailyLove={dailyLove} weeklyHoro={weeklyHoro} weeklyLove={weeklyLove} monthlyHoro={monthlyHoro} monthlyLove={monthlyLove} dailyCareer={dailyCareer} weeklyCareer={weeklyCareer} monthlyCareer={monthlyCareer}/> } />
        
        <Route path="/matches" element={<DailyMatchesDash users={users} setUsers={setUsers} getUsers={getUsers} />}/>

      </Routes>
      <Footer />
    </div>
  );
}
export default App;

