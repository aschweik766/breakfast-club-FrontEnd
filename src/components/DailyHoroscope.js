import React from 'react'

function DailyHoroscope({ dailyHoro, login }) {

if (!dailyHoro && !(login)) {
    return( <div className='daily-horo'>
    <h4 className='horo-title'>Daily Horoscope</h4><p>Just a moment for your daily horoscope...</p></div>)
}

  return (
    <div className='daily-horo'>
    <h4 className='horo-title'>Daily Horoscope</h4>
    {dailyHoro.map((oneHoro, i) => {
        console.log(oneHoro.horoscope)
        if (oneHoro.horoscope === login.zodiacSign)
        { return (
           
            <p key='i'> {oneHoro.prediction} </p>
          
        )} return (null)
      })
      
      }

      </div>
  )
}

export default DailyHoroscope