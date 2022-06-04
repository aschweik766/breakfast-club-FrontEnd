import React from 'react'

function WeeklyLove({ weeklyLove }) {
    if (!weeklyLove) {
        return( <div className='love-horo'>
        <h4 className='love-title'>Love Horoscope for the Week</h4>
        <p>Just a moment for your weekly love horoscope...</p></div>)
    }
    // console.log(weeklyLove)
    
      return (
        <div className='love-horo'>
        <h4 className='love-title'>Love Horoscope for the Week</h4>
               
                <p> { Object.values(weeklyLove) } </p>
              
    
          </div>
      )
}

export default WeeklyLove