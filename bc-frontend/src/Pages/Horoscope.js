import React from 'react'

function Horoscope({horoscope}) {


    
if(!horoscope) {
   return(<h1>Loading...</h1>)
   
  
}

console.log(horoscope)

  return (
<div>
    Horoscope
   
{/* <h2>{horoscope}</h2> */}


</div>
  )
}

export default Horoscope