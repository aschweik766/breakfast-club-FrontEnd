import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import SignUpForm from './components/SignUpForm'

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/myaccount' element={<MyAccount />} />
    <Route path='/signup' element={<SignUpForm />} />
  </Routes>
  );
}

export default App;
