import React from "react";

function LoveHoroscope({ dailyLove, weeklyLove, monthlyLove }) {
  if (!(dailyLove && weeklyLove && monthlyLove)) {
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

      <h4 className="love-title">Love Horoscope for the Week</h4>

      <p> {Object.values(weeklyLove)} </p>

      <h4 className="love-title">Love Horoscope for the Month of May</h4>

      <p> {Object.values(monthlyLove)} </p>
    </div>
  );
}

export default LoveHoroscope;
