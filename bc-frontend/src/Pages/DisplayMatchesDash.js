import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
// import { useCookies } from 'react-cookie'



const genderURL = 'http://localhost:3001/users-gender-identity'
const userURL = 'http://localhost:3001/users/'
// const addMatchUrl = 'http://localhost:3001/update-matches'

const DisplayMatchesDash = () => {
  // console.log('passed the props as', props)
  const [users, setUsers] = useState(null)
  const [userGender, setUserGender] = useState(null)
  // const [lastDirection, setLastDirection] = useState()
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

    // useEffect(() => {
    //   if(users) {
    //   getUserGender()
    //   }
    // }, [users])

    // const updateUserMatches = async (userMatchedId) => {
    //     await fetch(addMatchUrl, {
    //       method: "put",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(userId, userMatchedId)
    //     })
    //           getUsers()
              
    // }
        

    // const swiped = (direction, swipeUserID) => {
    //   if (direction === 'right') {
    //     updateUserMatches(swipeUserID)
    //   }
    //   console.log('removing: ' + swipeUserID)
    //   setLastDirection(direction)
    // }
  
    // const outOfFrame = (name) => {
    //   console.log(name + ' left the screen!')
    // }

    // const matchedIds = users?.matches.map(({user_id}) => !matchedIds.includes(userGender.user_id))
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
        <div>

        </div>
              <h3>{user.firstName}</h3>
              <h5>user ID: {user._id}</h5> 
              <h5>user Gender Identification: {user.genderIdentity}</h5>
              <h5>user interested in: {user.interestedIn}</h5>
              <img src={user.image} alt='profile headshot' height='100' width='90'/>
      </div>
      ))
      
    );
}


export default DisplayMatchesDash
 /* {props.users ? selectedUser() : loading()} */
// const loading = () => {
//   return <h1>Loading all users......</h1>
// }


    


      // const getUserGender = async () => {
    //   try {
    //     const res = await fetch(genderURL, {
    //       params: {genderIdentity: users?.interestedIn}
    //     })
    //     setUserGender(res.data)
    //   } catch (error) {
    //     console.log(error)
    //   }

    //   }

  // const displayMatchUsers = () => {
    //   return userGender.map((user) => (
    //       <div key={user._id} className='user'>
    //               <h3>{user.firstName}</h3>
    //               <h5>user ID: {user._id}</h5> 
    //               <h5>user Gender Identification: {user.genderIdentity}</h5>
    //               <h5>user interested in: {user.interestedIn}</h5>
    //       </div>
    //       ))
    //   }
    //return
    //// <div>
      //     <h2>Welcome to your Match Dash</h2>
          {/* <h4>{displayMatchUsers()}</h4> */}
          
          // <div className='dashboard'>
            {/* <MatchContiner users={users}/> */}
            {/* <div className='swipe-container'> */}
              // <div className='card-container'> 
               
                {/* {filterUserGender?.map((user)=>
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
                <div className='swipe-info'>{lastDirection ? <p>You swiped {lastDirection}</p> : <p/>}</div> */}
            //   </div>
            // </div>

      // </div>