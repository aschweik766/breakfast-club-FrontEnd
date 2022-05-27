import './App.css';
import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import SignUp from './Pages/SignUp'
import EditProfile from './Pages/EditProfile';
import Login from './Pages/Login';
import StarChart from './Pages/StarChart';
import Horoscope from './Pages/Horoscope';

function App() {

  const [user, setUser] = useState(null)
  const [horoscope, setHoroscope] = useState(null)

  function getUser () {
    const url = 'http://localhost:3001/myaccount'
    fetch(url)
    .then((res) => res.json())
    .then((res) => setUser(res))
    .catch(console.error) 
  }

  const updateUser = (a, id) => {
    const putURL = "http://localhost:3001/edit/:id"
    fetch (putURL + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstName: ''})
    })
    getUser()
  }

  // function getHoroscope () {
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'daily-horoscopes1.p.rapidapi.com',
  //       'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
  //     }
  //   };
    
  //   fetch('https://daily-horoscopes1.p.rapidapi.com/', options)
  //     .then(response => response.json())
  //     .then(response => setHoroscope(response))
  //     .catch(err => console.error(err));

  // }

  function getHoroscope () {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'devbrewer-horoscope.p.rapidapi.com',
        'X-RapidAPI-Key': 'e5003d0b92msha0898f0c18e9287p1c5a94jsn9e9de59e6eb3'
      }
    };
    
    fetch('https://devbrewer-horoscope.p.rapidapi.com/today/long/Aries', options)
      .then(response => response.json())
      .then(response => setHoroscope(response))
      .catch(err => console.error(err));
  }



  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Host': 'astro-daily-live-horoscope.p.rapidapi.com',
  //       'X-RapidAPI-Key': 'edacaef342mshbdf5ee096e8dc49p13afddjsnc635d0c652c1'
  //     }
  //   };
    
  //   fetch('https://astro-daily-live-horoscope.p.rapidapi.com/horoscope/aries/today', options)
  //     .then(response => response.json())
  //     .then(response => setHoroscope(response))
  //     .catch(err => console.error(err))
  // }

  // const deleteUser = async id => {
  //   // make delete request to create people
  //   await fetch(deleteURL + id, {
  //       method: "delete",
  //       })
  //   // update list of people
  //   getUser()––
  // }
  
  useEffect(() => {
  getUser()
  getHoroscope()
  }, [])
  
  if (!user) {
    return(<h1>Loading...</h1>)
  }

  console.log(user._id) 

  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/starchart' element={<StarChart user={user} />} />
    <Route path='/myaccount' element={<MyAccount user={user} />} />
    <Route path='/signup' element={<SignUp user={user} />} />
    <Route path='/edit/:id' element={<EditProfile user={user} updateUser={updateUser()}/>}/>
    <Route path='/login' element={<Login />} />
    <Route path='/horoscope' element={<Horoscope horoscope={horoscope} /> } />
  </Routes>
  );
}

export default App;
