import React from 'react'
import {Link} from 'react-router-dom'
import Matches from './Matches'

function DailyMatches() {
  return (
    <div className='dm-body'>
    <div className='daily-matches'>
     <div className='daily-match'>
     <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="match1" className='dm-img'/>
       <p className='dm-bio'>Michael, 35 - Aries<br/>New York, NY <br/>Likes: Hiking
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://cdn.pixabay.com/photo/2016/01/18/05/04/female-1146029_960_720.jpg" alt="match2" className='dm-img' />
       <p className='dm-bio'>Julia, 23 - Gemini<br/>Toronto, CA <br/>Likes: Art, Dogs
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_960_720.jpg"  alt="match3" className='dm-img'/>
       <p className='dm-bio'>Sam, 32 - Sagittarius<br/>Atlanta, GA <br/>Likes: Food, Sports
       </p>
    </div>

    </div>
    </div>
  )
}

export default DailyMatches