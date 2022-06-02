import React from 'react'

function DailyMatches() {
  return (
    <div className='dm-body'>
        <h3 className='comp-title'>Today's Compatibility</h3>
    <div className='daily-matches'>
     <div className='daily-match'>
       <img src="https://thispersondoesnotexist.com/image" alt="match1" className='dm-img'/>
       <p className='dm-bio'>Michael, 35 - Aries<br/>New York, NY <br/>Likes: Hiking
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://thispersondoesnotexist.com/image" alt="match2" className='dm-img' />
       <p className='dm-bio'>Julia, 23 - Gemini<br/>Toronto, CA <br/>Likes: Art, Dogs
       </p>
    </div>
    <div className='daily-match'>
       <img src="https://thispersondoesnotexist.com/image" alt="match3" className='dm-img'/>
       <p className='dm-bio'>Sam, 32 - Sagittarius<br/>Atlanta, GA <br/>Likes: Food, Sports
       </p>
    </div>

    </div>
    </div>
  )
}

export default DailyMatches