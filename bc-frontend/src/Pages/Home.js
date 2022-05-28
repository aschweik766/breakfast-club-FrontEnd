import React from 'react'
import DailyMatches from '../components/DailyMatches'
import DailyHoroscope from '../components/DailyHoroscope'
import LoveHoroscope from '../components/LoveHoroscope'
// import { Link } from 'react-router-dom'

function Home({ horoscope }) {
  return (
    
    <div className='body'>

    <div className='lr-cont'>
    <div className='left'>
    
    <DailyMatches />

    <LoveHoroscope horoscope={horoscope}/>

    </div>

    <div className='right'>
      <DailyHoroscope horoscope={horoscope}/>
    </div>

    </div>
    </div>
  )
}

export default Home