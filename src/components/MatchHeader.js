import React from 'react'

const MatchHeader = ({ login }) => {
  return (
    <div className='match-container-header'>
        <div className='match-dash-account'>
            <div className='images-container'>
                <img src={login.image} alt={'headshot of ' + login.firstName}/>
            </div>
            <h3>{loginUserId.firstName}</h3>
        </div>
        <>logo to logout</>
    </div>
  )
}

export default MatchHeader