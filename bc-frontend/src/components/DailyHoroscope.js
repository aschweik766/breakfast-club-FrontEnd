import React from 'react'

function DailyHoroscope({ dailyHoro }) {

if (!dailyHoro) {
    return( <div className='daily-horo'>
    <h4 className='horo-title'>Daily Horoscope</h4><p>Just a moment for your daily horoscope...</p></div>)
}

  return (
    <div className='daily-horo'>
    <h4 className='horo-title'>Daily Horoscope</h4>
    {dailyHoro.map((oneHoro, i) => {
        // console.log(oneHoro.horoscope)
        if (oneHoro.horoscope === "Aries")
        { return (
           
            <p key='i'> {oneHoro.prediction} </p>
          
        )}
      })
      
      }

      </div>
  )
}

export default DailyHoroscope