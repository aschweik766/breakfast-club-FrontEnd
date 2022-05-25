import React from 'react'
import DailyMatches from '../components/DailyMatches'
// import { Link } from 'react-router-dom'

function Home() {
  return (
    
    <div className='body'>

    <div className='lr-cont'>
    <div className='left'>
    
    <DailyMatches />

    <div className='love-horo'>
    <h4 className='love-title'>Love Horoscope</h4>
        <p>May 21, 2022 - Today's prospects should suit the dynamic, idealistic being that you are, especially right now. There will be some criticism in the air, and you won't miss an opportunity to punctuate your comments with your famous irony. Your viewpoints on corporate rigidity and conformist attitudes are well known, but today your sense of humor prevails and people listen to you with pleasure!</p>
    </div>

    </div>

    <div className='right'>
      <div className='daily-horo'>
        <h4 className='horo-title'>Daily Horoscope</h4>
        <p>May 21, 2022 - Today's prospects should suit the dynamic, idealistic being that you are, especially right now. There will be some criticism in the air, and you won't miss an opportunity to punctuate your comments with your famous irony. Your viewpoints on corporate rigidity and conformist attitudes are well known, but today your sense of humor prevails and people listen to you with pleasure!</p>
      </div>
    </div>

    </div>
    </div>
  )
}

export default Home