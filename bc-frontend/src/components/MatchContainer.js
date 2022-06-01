import React, { useState } from 'react'
import Matches from './Matches'


const MatchContainer = ({user}) => {
  return (
    <div className='match-container'>
        <div>
            <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
        </div>
        {!clickedUser && <Matches matches={user.matches} setClickedUser={setClickedUser}/>}
    </div>
  )
}

export default MatchContainer