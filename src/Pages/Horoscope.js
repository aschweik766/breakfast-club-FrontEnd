import React, { useState, useEffect } from "react";
import DailyHoroscope from "../components/DailyHoroscope";
import LoveHoroscope from "../components/LoveHoroscope";
import MonthlyHoro from "../components/MonthlyHoro";
import WeeklyHoro from "../components/WeeklyHoro";
import CareerHoro from "../components/CareerHoro";

/* eslint-disable */

//Used code from https://bobbyhadz.com/blog/react-change-style-on-click and https://stackoverflow.com/questions/37639122/using-event-target-with-react-components to accomplish the toggle effect

function Horoscope({
  dailyHoro,
  dailyLove,
  weeklyHoro,
  weeklyLove,
  monthlyHoro,
  monthlyLove,
  dailyCareer,
  weeklyCareer,
  monthlyCareer,
  login,
  userZod, 
  setUserZod,
  dh, dl, wh, mh, wl, ml, dc, wc, mc
}) {
  const [isActive, setIsActive] = useState("Daily");

  const handleClick = (event) => {
    // 👇️ toggle
    setIsActive(event.target.innerHTML);
    // console.log(isActive);
    // 👇️ or set to true
    // setIsActive(true);
    // console.log('clicked', isActive)
  };

  console.log(userZod)

  useEffect(() => {
    setUserZod(login.zodiacSign.toLowerCase());
    if (!userZod) { return ( console.log ('sorry'))} 
    dh();
    dl(userZod)
    wh(userZod)
    mh(userZod)
    wl(userZod)
    ml(userZod)
    dc(userZod)
    wc(userZod)
    mc(userZod)

}, [userZod])

  console.log(userZod)
  console.log(dailyLove)
  console.log('done render')

  if (!(dailyLove && dailyHoro && weeklyHoro && weeklyLove && monthlyHoro && monthlyLove && dailyCareer && weeklyCareer && monthlyCareer)) {
    return (
      <div className="horobody">
        <h2>Horoscopes</h2>
        <div className="horonav">
          
          <h3
            className="horolink"
            onClick={handleClick}
            style={{
              borderBottom: isActive === "Daily" ? "2px solid black" : "none",
            }}
          >
            Daily
          </h3>
          <h3
            className="horolink"
            onClick={handleClick}
            style={{
              borderBottom: isActive === "Weekly" ? "2px solid black" : "none",
            }}
          >
            Weekly
          </h3>
          <h3
            className="horolink"
            onClick={handleClick}
            style={{
              borderBottom: isActive === "Monthly" ? "2px solid black" : "none",
            }}
          >
            Monthly
          </h3>
          <h3
            className="horolink"
            onClick={handleClick}
            style={{
              borderBottom: isActive === "Love" ? "2px solid black" : "none",
            }}
          >
            Love
          </h3>
          <h3
            className="horolink"
            onClick={handleClick}
            style={{
              borderBottom: isActive === "Career" ? "2px solid black" : "none",
            }}
          >
            Career
          </h3>
        </div>
        <br/><br/>
        <p>Just a moment for your horoscopes...</p>
        </div>
    );
  } 
  
  console.log(weeklyHoro, dailyCareer)
  
  return (
    <div className="">
      <h2>Horoscopes</h2>
      <div className="horonav">
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Daily" ? "2px solid black" : "none",
          }}
        >
          Daily
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Weekly" ? "2px solid black" : "none",
          }}
        >
          Weekly
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Monthly" ? "2px solid black" : "none",
          }}
        >
          Monthly
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Love" ? "2px solid black" : "none",
          }}
        >
          Love
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Career" ? "2px solid black" : "none",
          }}
        >
          Career
        </h3>
      </div>

      <div>
        <div
          style={{
            display: isActive === "Daily" ? "block" : "none",
          }}
        >
          <DailyHoroscope dailyHoro={dailyHoro} zodiac={userZod} login={login}/>
        </div>

        <div
          style={{
            display: isActive === "Weekly" ? "block" : "none",
          }}
        >
          <WeeklyHoro weeklyHoro={weeklyHoro} userZod={userZod} login={login}/>
        </div>
        <div
          style={{
            display: isActive === "Monthly" ? "block" : "none",
          }}
        >
          <MonthlyHoro monthlyHoro={monthlyHoro} userZod={userZod} login={login}/>
        </div>
        <div
          style={{
            display: isActive === "Love" ? "block" : "none",
          }}
        >
          <LoveHoroscope dailyLove={dailyLove} weeklyLove={weeklyLove} monthlyLove={monthlyLove} userZod={userZod} login={login}/>
        </div>
        <div
          style={{
            display: isActive === "Career" ? "block" : "none",
          }}
        >
          <CareerHoro dailyCareer={dailyCareer} weeklyCareer={weeklyCareer} monthlyCareer={monthlyCareer} userZod={userZod} login={login}/>
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
