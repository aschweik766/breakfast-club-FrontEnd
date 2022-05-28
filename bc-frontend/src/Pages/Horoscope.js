import React from 'react'
import DailyHoroscope from '../components/DailyHoroscope'
import LoveHoroscope from '../components/DailyLove'
/* eslint-disable */

function Horoscope({ dailyHoro, dailyLove }) {

if(!dailyHoro) {
   return(<h1>Loading...</h1>)
}
  return (
<div className='body'> 
<h2>Horoscopes</h2>
  <DailyHoroscope dailyHoro={dailyHoro} />
  <LoveHoroscope dailyLove={dailyLove}/>
</div>
  )
}

export default Horoscope