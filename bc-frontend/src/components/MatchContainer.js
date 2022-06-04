import React, { useEffect } from 'react'
import Matches from './Matches'


const MatchContainer = ({matches, login, users, userGender, swipeUsers, getUserGender}) => {
console.log(userGender)

// const seeMatches = matches.map(({firstName}) => firstName)
console.log(matches)
useEffect(() => {
  getUserGender()
 
}, [])
  return (
    <div className='match-container'>
        <div>
            <button className="match-button">Matches</button>
            <h1>Match List</h1>
            {matches.map((match) => (
              <div key={match._id} className='matches'>
                <h2>{match.firstName}</h2>
                <h4>{match.zodiacSign}</h4>
            </div>
           ))}
        </div>
         <Matches matches={login.matches} swipeUsers={swipeUsers} login={login} users={users} userGender={userGender}/>
    </div>
  )
}

export default MatchContainer