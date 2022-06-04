import React, { useEffect } from 'react'
import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import MatchContainer from '../components/MatchContainer';
import axios from 'axios'

const genderURL = 'http://localhost:3001/users-gender-identity'
const addMatchUrl = 'http://localhost:3001/update-matches'

const DisplayMatchesDash = ({users, login, getUsers}) => {
  const usersDB = users
  // console.log(usersDB) //the array of users objects from user-model

  const swipeUsers = usersDB
  // console.log('swiped users array:', swipeUsers  //now DB is a new variable to pass to backend

  const loginUserId = login._id
  console.log('the login user id:', loginUserId)  //getting the logged in user's user_id 

  const [lastDirection, setLastDirection] = useState()
  const [userGender, setUserGender] = useState(users) 
  const [swipedCard, setSwipedCard] = useState(null) //had to make a state to hold the swiped card ID
  const [swipedRight, setSwipedRight] = useState(false)

  // find users that identify as male and display results
  const getUserGender = () => {
    const res = fetch(genderURL, {
      params: {gender: login.interestedIn}
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
 
    //tinder card swipe functions
    const updateLoginMatches = async (swipeCard) => {
    try {
        await axios.put(addMatchUrl, {
            loginUserId,
            swipeCard
        })
        getUsers()
        console.log('swiped sent as update to backend:', swipeCard)
    } catch (err) {
        console.log(err)
    }
  }

  const swiped = (direction, cardSwiped) => {
      if (direction === 'right') {
        setSwipedCard(cardSwiped)
        
        // const uSwipedRight = swipedCard
      }
      console.log('removing: ' + cardSwiped)
      setLastDirection(direction)
  }

    useEffect(() => {
      updateLoginMatches(swipedCard)
    }, [swipedCard])

  const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
  }

  
  if(!(users && login)) {
    return(<>nothing</>)
  }
  // console.log(getMatch())
  // console.log('gendered users', userGender) 
  // console.log(login)
  console.log('all users:', users)
  console.log('swiped card is:', swipedCard)
  console.log('gendered users', userGender) 
  // console.log(login)
  console.log(users)
  console.log(swipedCard)

  const matchedLoginIds = login?.matches.map(({_id}) => _id)
  const filterUsersGender = userGender?.filter(swipedCard => !matchedLoginIds.includes(swipedCard))

  console.log('filterUsersGender ', filterUsersGender)
  console.log('matched ids to login are now in array as:', matchedLoginIds)
  return (
    <>
    {login &&
      <div className='dashboard'>
            <MatchContainer matches={login.matches} login={login} users={users} getUserGender={getUserGender} userGender={userGender} swipeUsers={swipeUsers} filterUsersGender={filterUsersGender} />
            <div className='swipe-container'>
            <h1>Display Matches Dashboard</h1>
             <div className='match-container' >
             {/* {filterUsersGender?.map((userGender) => */}
             {/* {swipeUsers?.map((swiper) => */}
              {filterUsersGender?.map((swiper) =>
                <TinderCard className='swipe' key={swiper._id} onSwipe={(dir) => swiped(dir, swiper._id)} onCardLeftScreen={() => outOfFrame(swiper.firstName)}>
                  <div style={{ backgroundImage: 'url(' + swiper.image + ')'  }} className='card'>
                    <h3>{swiper.firstName}</h3>
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

