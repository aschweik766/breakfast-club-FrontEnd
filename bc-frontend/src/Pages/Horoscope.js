import React from 'react'
import DailyHoroscope from '../components/DailyHoroscope'
import LoveHoroscope from '../components/LoveHoroscope'
/* eslint-disable */

function Horoscope({ horoscope }) {

if(!horoscope) {
   return(<h1>Loading...</h1>)
}
  return (
<div className='body'> 
<h2>Horoscopes</h2>
  <DailyHoroscope horoscope={horoscope}/>
  <LoveHoroscope horoscope={horoscope}/>
</div>
  )
}

export default Horoscope