import React from 'react'
import {Link} from 'react-router-dom'
import Matches from './Matches'

function DailyMatches() {
  return (
    <div className='dm-body'>
    <div className='daily-matches'>
     <div className='daily-match'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj5olWjirTVdEJTss1QfCE3JKF77gYE3C39A&usqp=CAU" alt="match1" className='dm-img'/>
       <p className='dm-bio'>Michael, 35 - Aries<br/>New York, NY <br/>Likes: Hiking
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTk4VzPbKKwMt2Nro3ODgYDZm3xJB96EYzhw&usqp=CAU" alt="match2" className='dm-img' />
       <p className='dm-bio'>Julia, 23 - Gemini<br/>Toronto, CA <br/>Likes: Art, Dogs
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfH0VoIrtU9JMEDiinAHHlnv-eqKnEnHZvnw&usqp=CAU" alt="match3" className='dm-img'/>
       <p className='dm-bio'>Sam, 32 - Sagittarius<br/>Atlanta, GA <br/>Likes: Food, Sports
       </p>
    </div>

    </div>
    </div>
  )
}

export default DailyMatches