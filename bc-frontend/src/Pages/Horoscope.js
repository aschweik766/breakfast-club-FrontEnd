import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DailyHoroscope from '../components/DailyHoroscope'
import LoveHoroscope from '../components/DailyLove'
import HoroscopeNav from '../components/HoroscopeNav'
import MonthlyHoro from '../components/MonthlyHoro'
import MonthlyLove from '../components/MonthlyLove'
import WeeklyHoro from '../components/WeeklyHoro'
import WeeklyLove from '../components/WeeklyLove'
/* eslint-disable */

//Used code from https://bobbyhadz.com/blog/react-change-style-on-click and https://stackoverflow.com/questions/37639122/using-event-target-with-react-components to accomplish the toggle effect

function Horoscope({ dailyHoro, dailyLove, weeklyHoro, weeklyLove, monthlyHoro, monthlyLove }) {
  const [isActive, setIsActive] = useState('Daily');

  const handleClick = (event) => {
    // 👇️ toggle
    setIsActive(event.target.innerHTML);
console.log(isActive)
    // 👇️ or set to true
    // setIsActive(true);
    // console.log('clicked', isActive)
  };

if(!dailyHoro) {
   return(<div className='body'>
    <h2>Horoscopes</h2>
   <HoroscopeNav/>
   </div>)
}
  return (
<div className='body'> 
<h2>Horoscopes</h2>
  <div className='horonav'> 
        <h3>About You</h3>
        <h3 onClick={handleClick}>Daily</h3>
        <h3 onClick={handleClick}>Weekly</h3>
        <h3 onClick={handleClick}>Monthly</h3>
        <h3 onClick={handleClick}>Love</h3>
        <h3 onClick={handleClick}>Career</h3>
        </div>

  <div>

  <div style={{
          display: isActive === 'Daily' ? 'block' : 'none',
        }}>
          <DailyHoroscope dailyHoro={dailyHoro} />
  </div>

  <div style={{
          display: isActive === 'Weekly' ? 'block' : 'none',
        }} ><WeeklyHoro weeklyHoro={weeklyHoro}/>
  </div>

  <div style={{
          display: isActive === 'Love' ? 'block' : 'none',
        }}>
    <LoveHoroscope dailyLove={dailyLove} />
        </div>
  <div style={{
          display: isActive === 'Love' ? 'block' : 'none',
        }}>
          <WeeklyLove weeklyLove={weeklyLove} />
        </div>
  <div style={{
          display: isActive === 'Monthly' ? 'block' : 'none',
        }}>
          <MonthlyHoro monthlyHoro={monthlyHoro} />
    </div>
  <div style={{
          display: isActive === 'Love' ? 'block' : 'none',
        }}>
    <MonthlyLove monthlyLove={monthlyLove} />
        </div>
        </div>
</div>
  )
}

export default Horoscope