import React, { useState } from 'react'
import { useEffect } from "react";


const Matches = () => {



  return (
    <div></div>
  )
}


export default Matches;
// const Matches = ({ matches, setClickedUser, userGender}) => {
//   const [matchedAccounts, setMatchedAccounts] = useState(null);

//   const userMatchedId = matches.map(({ user_id }) => user_id);
//   const userId = userGender._id
//   console.log(userId)

//   const getUserMatches = async () => {
//     try {
//       const res = await fetch("http://localhost:8000/users", {
//         params: { userIds: JSON.stringify(userMatchedId) },
//       });
//       setMatchedAccounts(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getUserMatches();
//   }, [matches]);

//     const filterMatchedAccounts = matchedAccounts?.filter(
//         (matchedAccount) =>
//           matchedAccount.matches.filter((account) => account.props.user_id == userId)
//             .length > 0
//       );
//     return (
//         <div className="show-matches">
//         {filterMatchedAccounts?.map((match, _index) => (
//         <div
//             key={_index}
//             className="match-card"
//             onClick={() => setClickedUser(match)}>
//             <div className="image-container">
//             <img src={match?.url} alt={match?.firstName + " Account"} />
//             </div>
//             <h3>{match?.firstName}</h3>
//         </div>
//         ))}
//     </div>
//     )  
// };
  
// export default Matches


// will have to define how users/signup and dating preferences link; preferrably one DB or decide so I can update backend with that collection

// Compatability paramaters to match and filter users:
//     sexual preference: male, female, both, other
//     gender identity or listed gender preferences: male, female, nonbinary, Intersex
//     zodiac sign compatability: Sun rising, + virgo?
//     top 1 interest

// Will need to getMatches () =>
//     updateMatches () =>
//     Swipe function -> 
//         swipe right this will update matches and display your matches on your home dashboard
//         swipe left this will delete from getmatches array.
//     return(tinder-cards)

// Display matches on home/my account dashboard 
//     Matches Save your matches you have swiped right on
//     Messaging You can click a "Message" button on a match user card, and display the messaging board/page
//         display messaging: form for commenting, submit, display communication bubble, etc?

// will have to update backend to matches, update User with matches, update User with messages, get user by compatability: 
//     router.put(user/:addMatches)
//     router.get(user/:matches)
//     router.get(user/:compatability)
//     router.get(user/:get-messages)
//         {from user_id to a user_id}
//     router.post(user/:send-message)


//     swipe function

//     updateMatches function