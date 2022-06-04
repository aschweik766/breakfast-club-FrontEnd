import axios from 'axios';
// import React, { useState } from 'react'
import { useEffect } from "react";


const Matches = ({matches, login, users, userGender, swipeUsers}) => {
  const matchedLoginIds = matches.map(({_id}) => _id)
  const loginUserId = login._id
  // console.log(loginUserId)
  console.log(matchedLoginIds)
  console.log(swipeUsers)
  console.log(users)
  console.log(login)
  console.log(userGender)
  console.log(matches)

  useEffect(() => {
    
  }, [matches]);

   //to complete: will need other function to get more details form backend and push all user profile, will use this to also start messages.

    return (
        <div className="show-matches">
            {/* <button className="match-button">Matches</button>
            <h1>Match List</h1>
            {matches.map((match) => (
              <div key={match._id} className='matches'>
                <h2>{match.firstName}</h2>
                <h4>{match.zodiacSign}</h4>
            </div>
           ))} */}

        </div>
    )  
};


export default Matches;

  