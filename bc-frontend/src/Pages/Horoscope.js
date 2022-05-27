import React from 'react'
/* eslint-disable */

function Horoscope({ horoscope }) {



  if (!horoscope) {
    return (<h1>Loading...</h1>)


  }

  console.log(horoscope.map((key, i) => {
    return (key)
  }))

  return (
    <div>
      Horoscope

      {/* <h2>{horoscope.map((key, i) => {
        return (key)
      })}</h2> */}
    </div>
  )
}

export default Horoscope