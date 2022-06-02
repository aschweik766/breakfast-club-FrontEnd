import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
// import MatchContainer from '../components/MatchContainer';
// import { useCookies } from 'react-cookie'



const genderURL = 'http://localhost:3001/users-gender-identity'
const userURL = 'http://localhost:3001/users/'
// const addMatchUrl = 'http://localhost:3001/update-matches'

const DisplayMatchesDash = (props) => {
  // console.log('passed the props as', props)
  const [users, setUsers] = useState(null)
  const [userGender, setUserGender] = useState(null)
  const [lastDirection, setLastDirection] = useState()
  // const userId = props.users._id
  // console.log('the user id is', userId)

    // }
    const getUsers = () => {
      fetch(userURL)
        .then((res) => res.json())
        .then((res) => setUsers(res))
        .catch(console.error);
       
    }
    //find users that identify as male and display results
    const getUserGender = () => {
      fetch(genderURL)
        .then((res) => res.json())
        .then((res) => setUserGender(res))
        .catch(console.error);
    }
    // console.log('users', users)
    // console.log('gendered users', userGender)

    useEffect(()=> {
      getUsers()
      getUserGender()
    }, [])


    // const updateUserMatches = async (matchedIds) => {
    //     await fetch(addMatchUrl, {
    //       method: "put",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(user_id, matchedIds)
    //     })
    //     getUsers()
              
    // }
        

    const swiped = (direction, swipeUserID) => {
      if (direction === 'right') {
        console.log( ' right of the screen!')
        // updateUserMatches(swipeUserID)
      }
      console.log('removing: ' + swipeUserID)
      setLastDirection(direction)
    }
  
    const outOfFrame = (name) => {
      console.log(name + ' left the screen!')
    }

    // const matchedIds = userGender?.matches.map(({user_id}) => !matchedIds.includes(userGender.user_id))
    // console.log(matchedIds)


    // const filterUserGender = userGender?.filter(userGender => !matchedIds.includes(userGender.user_id))
    // console.log('filterUserGender', filterUserGender)
    // console.log('the gendered users are', userGender)
    // console.log('the users are', users)
   
    if(!users) {
      return (
        <h1>Loading...</h1>
      )
    }  
    return (
      userGender.map((user) => (
      <div key={users._id} className='user'>
        <div className="dashboard">
          {/* <MatchContainer userGender={userGender} /> */}
          <div className="swipe-container">
            <div className="card-container">
            <TinderCard 
                      className='swipe'
                      key={user._id}
                      onSwipe={(dir) => swiped(dir, user.firstName)}
                      onCardLeftScreen={() => outOfFrame(user.firstName)}>
                         <div className='card'>
                              <h3>{user.firstName}</h3>
                              <h5>user ID: {user._id}</h5> 
                              <h5>user Gender Identification: {user.genderIdentity}</h5>
                              <h5>user interested in: {user.interestedIn}</h5>
                              <img src={user.image} alt='profile headshot' height='100' width='90'/>
                        </div>
                  </TinderCard>
                  <div className="swipe-info">
                    {lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}
                </div>
            </div> 
          </div> 
         </div>
        </div>
      ))
    );
}

export default DisplayMatchesDash


    //return
    //// <div>
      //     <h2>Welcome to your Match Dash</h2>
          /* <h4>{displayMatchUsers()}</h4> */
          
          // <div className='dashboard'>
            /* <MatchContiner users={users}/> */
            /* <div className='swipe-container'> */
              // <div className='card-container'> 
               
                /* {filterUserGender?.map((user)=>
                  <TinderCard 
                      className='swipe'
                      key={user._id}
                      onSwipe={(dir) => swiped(dir, user.firstName)}
                      onCardLeftScreen={() => outOfFrame(user.firstName)}>
                         <div className='card'>
                              <h3>{userGender.name}</h3>
                        </div>
                  </TinderCard>
                )}
                <div className='swipe-info'>{lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}</div> */
            //   </div>
            // </div>

      // </div>