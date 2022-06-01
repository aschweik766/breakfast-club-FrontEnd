// import React, { useState } from 'react'
// import { useEffect, useState } from "react";

// // import { useCookies } from "react-cookie";

// const Matches = ({ matches, setClickedUser }) => {
//   const [matchedAccounts, setMatchedAccounts] = useState(null);
// //   const [cookies, setCookie, removeCookie] = useCookies(null);

//   const userMatchedId = matches.map(({ user_id }) => user_id);
//   const userId = cookies.UserId;

//   const showMatches =  () => {
//       fetch('http://localhost:3001/users/', {
//         params: { userIds: JSON.stringify(userMatchedId)}
//       )}
//     setMatchedAccounts(res.data);
//   }  

//   useEffect(() => {
//     showMatches();
//   }, [matches]);


//     const filterMatchedAccounts = matchedAccounts?.filter(
//         (matchedAccount) =>
//           matchedAccount.matches.filter((account) => account.user_id == userId)
//             .length > 0
//       );

//     return (
//         <div className="show-matches">
//         {filterMatchedAccounts?.map((match, _index) => (
//         <div
//             key={_index}
//             className="match-card"
//             onClick={() => setClickedUser(match)}
//         >
//             <div className="image-container">
//             <img src={match?.url} alt={match?.first_name + " profile"} />
//             </div>
//             <h3>{match?.first_name}</h3>
//         </div>
//         ))}
//     </div>
//     )  
// };
  
// export default Matches


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


    //swipe function

    //updateMatches function