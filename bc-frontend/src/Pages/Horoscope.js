import React from 'react'
/* eslint-disable */

function Horoscope({ horoscope }) {


    
if(!horoscope) {
   return(<h1>Loading...</h1>)
   
  
}


console.log(Object.values(horoscope[0]))

// console.log(horoscope.map((key, i) => {
//     let values = Object.values(key);
//     let valMap = Object.values(values)
//     let singleSign = valMap.map((one, i) => {return(one)})
//     // let lala = singleSign.map((k) => k)
//    console.log(singleSign)
//         }   
//    ))

  return (
<div>
    Horoscope
   
{/* <h2>{horoscope.map((key, i) => {return (key)})}</h2> */}


</div>
  )
}

export default Horoscope