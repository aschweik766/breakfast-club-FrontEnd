import React, { useState } from "react";
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
  monthlyCareer
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

  if (!dailyHoro) {
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
      </div>
    );
  }
  return (
    <div className="">
      <h2>Horoscopes</h2>
      <div className="horonav">
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Daily" ? "3px solid black" : "none",
          }}
        >
          Daily
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Weekly" ? "3px solid black" : "none",
          }}
        >
          Weekly
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Monthly" ? "3px solid black" : "none",
          }}
        >
          Monthly
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Love" ? "3px solid black" : "none",
          }}
        >
          Love
        </h3>
        <h3
          className="horolink"
          onClick={handleClick}
          style={{
            borderBottom: isActive === "Career" ? "3px solid black" : "none",
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
          <DailyHoroscope dailyHoro={dailyHoro} />
        </div>

        <div
          style={{
            display: isActive === "Weekly" ? "block" : "none",
          }}
        >
          <WeeklyHoro weeklyHoro={weeklyHoro} />
        </div>
        <div
          style={{
            display: isActive === "Monthly" ? "block" : "none",
          }}
        >
          <MonthlyHoro monthlyHoro={monthlyHoro} />
        </div>
        <div
          style={{
            display: isActive === "Love" ? "block" : "none",
          }}
        >
          <LoveHoroscope dailyLove={dailyLove} weeklyLove={weeklyLove} monthlyLove={monthlyLove} />
        </div>
        <div
          style={{
            display: isActive === "Career" ? "block" : "none",
          }}
        >
          <CareerHoro dailyCareer={dailyCareer} weeklyCareer={weeklyCareer} monthlyCareer={monthlyCareer} />
        </div>
      </div>
    </div>
  );
}

export default Horoscope;
