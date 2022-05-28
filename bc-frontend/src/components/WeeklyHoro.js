import React from 'react'

function WeeklyHoro({ weeklyHoro }) {
  
if (!weeklyHoro) {
    return( <div className='daily-horo'>
    <h4 className='horo-title'>Horoscope for the Week</h4>
    <p>Just a moment for your weekly horoscope...</p></div>)
}
// console.log(weeklyHoro)

  return (
    <div className='daily-horo'>
    <h4 className='horo-title'>Horoscope for the Week</h4>
           
            <p> { Object.values(weeklyHoro) } </p>
          

      </div>
  )
}

export default WeeklyHoro