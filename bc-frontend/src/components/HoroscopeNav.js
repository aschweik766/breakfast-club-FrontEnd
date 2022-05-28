import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function HoroscopeNav() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    // 👇️ toggle
    // setIsActive(current => !current);

    // 👇️ or set to true
    setIsActive(true);
  };
   
  return (
    <div className='body'>
        <div className='horonav'> 
        <Link to='/horoscope'><h3>About You</h3></Link>
        <h3 onClick={handleClick}>Daily</h3>
        <h3>Weekly</h3>
        <h3>Monthly</h3>
        <h3>Love</h3>
        <h3>Career</h3>
        </div>
       
    </div>
  )
}

export default HoroscopeNav