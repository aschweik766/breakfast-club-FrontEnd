import React from 'react'

function DailyLove({ dailyLove }) {

    if (!(dailyLove)) {
        return (
          <div className="love-horo">
            <h4 className="love-title">Love Horoscope</h4>
            <p>Just a moment for your love horoscopes...</p>
          </div>
        );
      }

       
  return (
    <div className="love-horo">
    <h4 className="love-title">Love Horoscope</h4>

    <p> {Object.values(dailyLove)} </p>
    </div>
  )
}

export default DailyLove