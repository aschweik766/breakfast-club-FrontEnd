import React from 'react'

function CareerHoro( { dailyCareer, weeklyCareer, monthlyCareer }) {
 
    if (!(dailyCareer && weeklyCareer && monthlyCareer)) {
        return (
          <div className="love-horo">
            <h4 className="love-title">Career Horoscope</h4>
            <p>Just a moment for your career horoscopes...</p>
          </div>
        );
      }
    
      return (
        <div className="love-horo">
          <h4 className="love-title">Career Horoscope</h4>
    
          <p> {Object.values(dailyCareer)} </p>
    
          <h4 className="love-title">Career Horoscope for the Week</h4>
    
          <p> {Object.values(weeklyCareer)} </p>
    
          <h4 className="love-title">Career Horoscope for the Month of May</h4>
    
          <p> {Object.values(monthlyCareer)} </p>
        </div>
      );
}

export default CareerHoro