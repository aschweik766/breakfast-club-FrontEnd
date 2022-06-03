import React, { useState } from 'react'
import Matches from './Matches'


const MatchContainer = ({ login }) => {
  const [ clickedUser, setClickedUser ] = useState(null)
  return (
    <div className='match-container'>
        <div>
            <button className="option" onClick={() => setClickedUser(null)}>Matches</button>
        </div>
        {!clickedUser && <Matches  setClickedUser={setClickedUser}/>}
    </div>
  )
}

export default MatchContainer