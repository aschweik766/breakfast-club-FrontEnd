import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import MatchContainer from '../components/MatchContainer';
import axios from 'axios'

//props being passed: the user that is logged in, and the users data (all users in the arry of objects from user-model in backend)

//remember: _id is object id; the user_id is an object item that each user has, this is used to match/is passed to the matches nested array/object.


const genderURL = 'http://localhost:3001/users-gender-identity'
const addMatchUrl = 'http://localhost:3001/update-matches'

const DisplayMatchesDash = ({users, login, getUsers}) => {
  const usersDB = users
  // console.log(usersDB) //the array of users objects from user-model

  const swipeUsers = usersDB
  // console.log('swiped users array:', swipeUsers)  //now DB is a new variable to pass to backend

  const loginUserId = login._id
  console.log('the login user id:', loginUserId)  //getting the logged in user's user_id 

  const [lastDirection, setLastDirection] = useState()
  const [userGender, setUserGender] = useState(users) 
  //--(for filtering users by params: gender Id, interested in, and zodiac sign.)
 

  // console.log(users)
  // console.log(login)
  // console.log(login.firstName)

  // console.log('passed the props as', login)


  // find users that identify as male and display results
  const getUserGender = () => {
    const res = fetch(genderURL, {
      params: {gender: login?.interestedIn}
    })
      .then((res) => res.json())
      .then((res) => setUserGender(res))
      .catch(console.error);
  }
 // {login}, userGender, these could be a useeffect dependency array...but it does the forever console logging when in there. 
  useEffect(()=> {
    getUserGender();
    getUsers();
  }, [])
 
console.log(userGender)
//add logic for match by zodiacSign for filtering.


const getMatch = () => {
  if(login.zodiacSign === 'Cancer' && userGender.zodiacSign === 'Taurus'|| userGender.zodiacSign === 'Pisces' ) {
    getUserGender()
  // } else if(login.zodiacSign === 'Aquarius' && userGender.zodiacSign === 'Aries'|| userGender.zodiacSign === 'Pisces') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Aries' && userGender.zodiacSign === 'Libra'|| userGender.zodiacSign === 'Saggitarius') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Leo' && userGender.zodiacSign === 'Saggitarius'|| userGender.zodiacSign === 'Aquarius') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Gemini' && userGender.zodiacSign === 'Libra'|| userGender.zodiacSign === 'Pisces') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Taurus' && userGender.zodiacSign === 'Pisces'|| userGender.zodiacSign === 'Cancer') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Virgo' && userGender.zodiacSign === 'Scorpio'|| userGender.zodiacSign === 'Pisces') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Pisces' && userGender.zodiacSign === 'Virgo'|| userGender.zodiacSign === 'Scorpio') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Capricorn' && userGender.zodiacSign === 'Taurus'|| userGender.zodiacSign === 'Cancer') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Saggitarius' && userGender.zodiacSign === 'Aries'|| userGender.zodiacSign === 'Leo') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Libra' && userGender.zodiacSign === 'Gemini'|| userGender.zodiacSign === 'Aquarius') {
  //   getUserGender()
  // } else if(login.zodiacSign === 'Scorpio' && userGender.zodiacSign === 'Cancer'|| userGender.zodiacSign === 'Pisces') {
  //   getUserGender()
  }else {
    return (<>nothing</>)
  }
    
}




//get matches pushed to array for viewing.
const updateLoginMatches = async (matchedLoginIds) => {
  try {
      await axios.put(addMatchUrl, {
          loginUserId,
          matchedLoginIds
      })
      getUsers()
  } catch (err) {
      console.log(err)
  }
}
 // const updateLoginMatches = async (matchedLoginIds, loginUserId) => {
  //     try {
  //       await fetch(addMatchUrl, {
  //         loginUserId,
  //         matchedLoginIds,
  //         method: "put",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(login),
  //       })
  //       getUsers()
  //     } catch (error) {
  //       console.log(error)
  //     }
  // } Tried with fetch, but had issues, switched to axios becuase it makes more sense, but if you can figure out fetch, *chefs kiss*


 
    

    //tinder card swipe functions

const [swipedCard, setSwipedCard] = useState(null) //had to make a state to hold the swiped card ID
const [swipedRight, setSwipedRight] = useState(false)

  const swiped = (direction, cardSwiped) => {
      if (direction === 'right') {
        setSwipedCard(cardSwiped)
        updateLoginMatches(swipedCard)
      }
      console.log('removing: ' + cardSwiped)
      setLastDirection(direction)
    }

    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }


  if(!(users && login)) {
    return(<>nothing</>)
  }
  // console.log(getMatch())
  console.log('gendered users', userGender) 
  // console.log(login)
  console.log(users)
  console.log(swipedCard)

//This will need to be used to map info and pass into my matches.js file; but I need the matches: {user_id} on the logged in user (login) to be pushed properly. Then should be a breeze.Currenlty all matches are pushing to Bob's matches.
  const matchedLoginIds = login?.matches.map(({user_id}) => user_id).concat(loginUserId)

  const filterUsersGender = userGender?.filter(userGender => !matchedLoginIds.includes(userGender.user_id))



  return (
    <>
    {login &&
      <div className='dashboard'>
            <MatchContainer login={login} />
            <div className='swipe-container'>
            <h1>Display Matches Dashboard</h1>
             <div className='match-container' >
             {/* {filterUsersGender?.map((userGender) => */}
             {/* {swipeUsers?.map((swiper) => */}
              {filterUsersGender?.map((swiper) =>
                <TinderCard className='swipe' key={swiper.user_id} onSwipe={(dir) => swiped(dir, swiper.user_id)} onCardLeftScreen={() => outOfFrame(swiper.firstName)}>
                  <div style={{ backgroundImage: 'url(' + swiper.image + ')'  }} className='card'>
                    <h3>{swiper.firstName}</h3>
                    <h5>{swiper._id}</h5>
                    <h5>{swiper.zodiacSign}</h5>
                  </div>
                </TinderCard>
              )}
            </div> 
            {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} 
        </div>
      </div>
    }
    </>
    )
}

export default DisplayMatchesDash;

//scratch work//
 //match info map for user logged in does work:
 /* <div className='acctInfo'> 
            <h2>Anika's Mathcing Info:</h2>
            <h3>{login.firstName}, {login._id} - {login.location}</h3>
            <h4>Zodiac Sign: {login.zodiacSign}</h4>
            <h4>Interested in dating: {login.interestedIn.map((interest) => {
                return(interest+" ")
              })}</h4>
        </div>
            <div> {users? swipedUserId() : <>noting</>} </div> */

//working swipe user map (all)
/* <>
    {login &&
      <div className='dashboard'>
          <h1>Display Matches Dashboard</h1>
            <MatchContainer login={login} />
          <div className='match-container' >
            {swipeUsers.map((swiper) =>
              <TinderCard className='swipe' key={swiper.user_id} onSwipe={(dir) => swiped(dir, swiper.firstName)} onCardLeftScreen={() => outOfFrame(swiper.firstName)}>
                <div style={{ backgroundImage: 'url(' + swiper.image + ')'  }} className='card'>
                  <h3>{swiper.firstName}</h3>
                  <h5>{swiper._id}</h5>
                  <h5>{swiper.zodiacSign}</h5>
                </div>
              </TinderCard>
            )}
          </div> 
          {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} 
      </div>
    }
    </> */

// import React, { useEffect } from 'react'
// import TinderCard from 'react-tinder-card';
// import { useState } from 'react';
// import MatchContainer from '../components/MatchContainer';
// // import { useParams } from 'react-router-dom';

// //props being passed: the user that is logged in, and the users data (all users in the arry of objects from user-model in backend)

// //remember: _id is object id; the user_id is an object item that each user has, this is used to match/is passed to the matches nested array/object.

// const genderURL = 'https://horoscopedatingapp-backend.herokuapp.com/users-gender-identity'


// // const genderURL = 'http://localhost:3001/users-gender-identity'
// // const addMatchUrl = 'http://localhost:3001/update-matches'

// const DisplayMatchesDash = ({users, login, getUsers}) => {
 
//   // const { id } = useParams() 
 
//   // console.log(usersDB) //the array of users objects from user-model
//   // const swipeUsers = usersDB
//   // console.log('swiped users array:', swipeUsers)  //now DB is a new variable to pass to backend

//   const loginUserId = login.user_id
//   const loginUsername = login.username
//   const objectId = login._id
//   const usersDB = users
//   const addMatchUrl = `https://horoscopedatingapp-backend.herokuapp.com/update-matches/${loginUsername}`
//   console.log(' this user logged in is: ', loginUsername)
//   console.log('the login user id:', loginUserId)  //getting the logged in user's user_id 
//   console.log('the user object id is: ', objectId)

//   const [lastDirection, setLastDirection] = useState()
//    const [userGender, setUserGender] = useState(users) 
//      const [loginUserMatches, setLoginUserMatches] = useState()


//   //--f(or filtering users by params: gender Id, interested in, and zodiac sign.)
//   // console.log(users)
//   // console.log(login)
//   // console.log(login.firstName)
//   // console.log('passed the props as', login)
//   // find users that identify as male and display results
//   const getUserGender = () => {
//     const res = fetch(genderURL, {
//       params: {gender: login?.interestedIn}
//     })
//       .then((res) => res.json())
//       .then((res) => setUserGender(res))
//       .catch(console.error);
//   }
//  // {login}, userGender, these could be a useeffect dependency array...but it does the forever console logging when in there. 
//   useEffect(()=> {
//     getUserGender()
//     getUsers()
//     // getLoggedInUser()
//   }, [])
 
//   // console.log('new get logged in user is: ', loginUserId)

// //add logic for match by zodiacSign for filtering.


// const getMatch = () => {
//   if(login.zodiacSign === 'Cancer' && userGender.zodiacSign === 'Taurus'|| userGender.zodiacSign === 'Pisces' ) {
//     getUserGender()
//   } else if(login.zodiacSign === 'Aquarius' && userGender.zodiacSign === 'Aries'|| userGender.zodiacSign === 'Pisces') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Aries' && userGender.zodiacSign === 'Libra'|| userGender.zodiacSign === 'Saggitarius') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Leo' && userGender.zodiacSign === 'Saggitarius'|| userGender.zodiacSign === 'Aquarius') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Gemini' && userGender.zodiacSign === 'Libra'|| userGender.zodiacSign === 'Pisces') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Taurus' && userGender.zodiacSign === 'Pisces'|| userGender.zodiacSign === 'Cancer') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Virgo' && userGender.zodiacSign === 'Scorpio'|| userGender.zodiacSign === 'Pisces') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Pisces' && userGender.zodiacSign === 'Virgo'|| userGender.zodiacSign === 'Scorpio') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Capricorn' && userGender.zodiacSign === 'Taurus'|| userGender.zodiacSign === 'Cancer') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Saggitarius' && userGender.zodiacSign === 'Aries'|| userGender.zodiacSign === 'Leo') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Libra' && userGender.zodiacSign === 'Gemini'|| userGender.zodiacSign === 'Aquarius') {
//     getUserGender()
//   } else if(login.zodiacSign === 'Scorpio' && userGender.zodiacSign === 'Cancer'|| userGender.zodiacSign === 'Pisces') {
//     getUserGender()
//   }else {
//     return (<>nothing</>)
//   }
    
// }




//   // } Tried with fetch, but had issues, switched to becuase it makes more sense, but if you can figure out fetch, *chefs kiss*

//   const updateLoginMatches = async (userSwiped) => {
//     await fetch(addMatchUrl, {
//       method: "put",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(login),
//     });
//     getUsers();
    
//     }
    
//     //tinder card swipe functions
//   const swiped = (direction, userSwiped) => {
//       if (direction === 'right') {
//         updateLoginMatches(userSwiped)
//       }
//       console.log('removing: ' + userSwiped)
//       setLastDirection(direction)
//     }

//     const outOfFrame = (name) => {
//       console.log(name + ' left the screen!')
//     }

//   if(!(users && login)) {
//     return(<>nothing</>)
//   }
//   // console.log(getMatch())
//   console.log('gendered users', userGender) 
//   console.log(login)
//   console.log(users)

// //This will need to be used to map info and pass into my matches.js file; but I need the matches: {user_id} on the logged in user (login) to be pushed properly. Then should be a breeze.Currenlty all matches are pushing to Bob's matches.
//   // const matchedUsername = login?.matches.map(({user_id}) => user_id).concat(loginUserId)

//   // const filterUsersByGenderId = userGender?.filter(userGender => !matchedUsername.includes(userGender.user_id))


//   return (
//     <>
//     {login &&
//       <div className='dashboard'>
//             <MatchContainer login={login} />
//             <div className='swipe-container'>
//             <h1>Display Matches Dashboard</h1>
//              <div className='match-container' >
//              {/* {filterUsersGender?.map((userGender) => */}
//              {/* {swipeUsers?.map((user) => */}
//               {userGender?.map((user) =>
//                 <TinderCard className='swipe' key={user.username} onSwipe={(dir) => swiped(dir, user.username)} onCardLeftScreen={() => outOfFrame(user.firstName)}>
//                   <div style={{ backgroundImage: 'url(' + user.image + ')'  }} className='card'>
//                     <h3>{user.firstName}</h3>
//                     <h5>{user._id}</h5>
//                     <h5>{user.zodiacSign}</h5>
//                   </div>
//                 </TinderCard>
//               )}
//             </div> 
//             {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} 
//         </div>
//       </div>
//     }
//     </>
//     )
// }

// export default DisplayMatchesDash;
// //scratch work//
//  //match info map for user logged in does work:
//  /* <div className='acctInfo'> 
//             <h2>Anika's Mathcing Info:</h2>
//             <h3>{login.firstName}, {login._id} - {login.location}</h3>
//             <h4>Zodiac Sign: {login.zodiacSign}</h4>
//             <h4>Interested in dating: {login.interestedIn.map((interest) => {
//                 return(interest+" ")
//               })}</h4>
//         </div>
//             <div> {users? swipedUserId() : <>noting</>} </div> */

// //working swipe user map (all)
// /* <>
//     {login &&
//       <div className='dashboard'>
//           <h1>Display Matches Dashboard</h1>
//             <MatchContainer login={login} />
//           <div className='match-container' >
//             {swipeUsers.map((swiper) =>
//               <TinderCard className='swipe' key={swiper.user_id} onSwipe={(dir) => swiped(dir, swiper.firstName)} onCardLeftScreen={() => outOfFrame(swiper.firstName)}>
//                 <div style={{ backgroundImage: 'url(' + swiper.image + ')'  }} className='card'>
//                   <h3>{swiper.firstName}</h3>
//                   <h5>{swiper._id}</h5>
//                   <h5>{swiper.zodiacSign}</h5>
//                 </div>
//               </TinderCard>
//             )}
//           </div> 
//           {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} 
//       </div>
//     }
//     </> */
     


// //get matches pushed to array for viewing.
// // const updateLoginMatches = async (matchedUsername) => {
// //   try {
// //       await fetch.put(addMatchUrl, {
// //           loginUserId,
// //           matchedUsername
// //       })
// //       getUsers()
// //   } catch (err) {
// //       console.log(err)
// //   }
// // }
//  // const updateLoginMatches = async (matchedUsername, loginUserId) => {
//   //     try {
//   //       await fetch(addMatchUrl, {
//   //         loginUserId,
//   //         matchedUsername,
//   //         method: "put",
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //         body: JSON.stringify(login),
//   //       })
//   //       getUsers()
//   //     } catch (error) {
//   //       console.log(error)
//   //     }

// //   const url = `https://horoscopedatingapp-backend.herokuapp.com/user-login/${id}`
// //   const [loginUser, setLoginUser] = useState(null)


// //   function getLoggedInUser(id) {
// //    fetch(url)
// //      .then((res) => res.json())
// //      .then((res) => setLoginUser(res))
// //      .catch(console.error);
// //  }


// // const updateLoginMatches = async (matchedUsername, loginUsername) => {
// //   try {
// //     await fetch(addMatchUrl, {
// //       loginUsername,
// //       matchedUsername,
// //       method: "put",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(login),
// //     })
// //     getUsers()
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }
