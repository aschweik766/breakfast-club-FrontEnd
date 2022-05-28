import React from 'react'

function LoveHoroscope( { horoscope }) {
 
if (!horoscope) {
    return( <div className='love-horo'>
    <h4 className='love-title'>Love Horoscope</h4><p>Just a moment for your love horoscope...</p></div>)
}

  return (
    <div className='love-horo'>
    <h4 className='love-title'>Love Horoscope</h4>
    {horoscope.map((oneHoro, i) => {
        console.log(oneHoro.horoscope)
        if (oneHoro.horoscope === "Aries")
        { return (
           
            <p key='i'> {oneHoro.prediction} </p>
          
        )}
      })
      
      }

      </div>
  )
}

export default LoveHoroscope