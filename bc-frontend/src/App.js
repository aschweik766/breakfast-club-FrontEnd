import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/myaccount' element={<MyAccount />} />
  </Routes>
  );
}

export default App;
