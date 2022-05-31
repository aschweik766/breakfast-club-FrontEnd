import React from 'react'
import DailyMatches from '../components/DailyMatches'
import DailyHoroscope from '../components/DailyHoroscope'
import DailyLove from '../components/DailyLove'
// import { Link } from 'react-router-dom'

function Home({ dailyHoro, dailyLove }) {
  return (
    
    <div className='body'>

    <div className='lr-cont'>
    <div className='left'>
    <Link to={`/myAccount/matches`}><button> Matches</button></Link>
    <Link to={`/myAccount/messages`}><button>Messages</button></Link>
    
    <DailyMatches />

    <DailyLove dailyLove={dailyLove}/>

    </div>

    <div className='right'>
      <DailyHoroscope dailyHoro={dailyHoro}/>
    </div>

    </div>
    </div>
  )
}

export default Home