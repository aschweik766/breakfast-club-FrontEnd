import React from 'react'

function MonthlyLove({ monthlyLove }) {
    if (!monthlyLove) {
        return( <div className='love-horo'>
        <h4 className='love-title'>Love Horoscope for the Month of May</h4>
        <p>Just a moment for your monthly love horoscope...</p></div>)
    }
    // console.log(monthlyLove)
    
      return (
        <div className='love-horo'>
        <h4 className='love-title'>Love Horoscope for the Month of May</h4>
               
                <p> { Object.values(monthlyLove) } </p>
              
    
          </div>
      )
}

export default MonthlyLove