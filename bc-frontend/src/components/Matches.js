import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'


//will have to define how users/signup and dating preferences link; preferrably one DB or decide so I can update backend with that collection

// Compatability paramaters to match and filter users:
    // sexual preference: male, female, both, other
    // gender identity or listed gender preferences: male, female, nonbinary, Intersex
    // zodiac sign compatability: Sun rising, + virgo?
    // top 1 interest

//Will need to getMatches () =>
    //updateMatches () =>
    //Swipe function -> 
        //swipe right this will update matches and display your matches on your home dashboard
        //swipe left this will delete from getmatches array.
    //return(tinder-cards)

//Display matches on home/my account dashboard 
    //Matches Save your matches you have swiped right on
    //Messaging You can click a "Message" button on a match user card, and display the messaging board/page
        //display messaging: form for commenting, submit, display communication bubble, etc?

//will have to update backend to matches, update User with matches, update User with messages, get user by compatability: 
    //router.put(user/:addMatches)
    //router.get(user/:matches)
    //router.get(user/:compatability)
    //router.get(user/:get-messages)
        //{from user_id to a user_id}
    //router.post(user/:send-message)

const Matches = ({users}) => {

const cardMatches = users


  return (
    <div className='matches-container'>Matches</div>
  )
}

export default Matches