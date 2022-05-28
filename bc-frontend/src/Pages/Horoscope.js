import React from 'react'
import DailyHoroscope from '../components/DailyHoroscope'
import LoveHoroscope from '../components/DailyLove'
import WeeklyHoro from '../components/WeeklyHoro'
import WeeklyLove from '../components/WeeklyLove'
/* eslint-disable */

function Horoscope({ dailyHoro, dailyLove, weeklyHoro, weeklyLove }) {

if(!dailyHoro) {
   return(<h1>Loading...</h1>)
}
  return (
<div className='body'> 
<h2>Horoscopes</h2>
  <DailyHoroscope dailyHoro={dailyHoro} />
  <WeeklyHoro weeklyHoro={weeklyHoro} />
  <LoveHoroscope dailyLove={dailyLove}/>
  <WeeklyLove weeklyLove={weeklyLove} />
</div>
  )
}

export default Horoscope