import React from 'react'

function MonthlyHoro({ monthlyHoro }) {
   
if (!monthlyHoro) {
    return( <div className='daily-horo'>
    <h4 className='horo-title'>Horoscope for the Month of May</h4>
    <p>Just a moment for your monthly horoscope...</p></div>)
}
console.log(monthlyHoro)

  return (
    <div className='daily-horo'>
    <h4 className='horo-title'>Horoscope for the Month of May</h4>
           
            <p> { Object.values(monthlyHoro) } </p>
          

      </div>
  )
}

export default MonthlyHoro