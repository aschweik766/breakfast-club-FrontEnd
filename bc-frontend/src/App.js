import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import SignUpForm from './components/SignUpForm'
import EditProfile from './Pages/EditProfile';
import StarChart from './Pages/StarChart';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/myaccount' element={<MyAccount />} />
    <Route path='/signup' element={<SignUpForm />} />
    <Route path='/edit/:id' element={<EditProfile />} />
    <Route path='/starchart' element={<StarChart />}/>
  </Routes>
  );
}

export default App;
