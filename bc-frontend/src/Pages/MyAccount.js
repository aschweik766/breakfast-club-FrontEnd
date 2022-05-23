import React from 'react'
import './MyAccount.css'

function MyAccount() {
  return (
    <div className='body'>
      <div className='page-cont'>
      <div className='sidebar'>
      <img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='default-img'/>
      </div>
        <div className='acct-header'>
         <h2>My Account</h2>
         <h3>Jaclene Sini, 31 - Brooklyn, New York</h3>
         <h4>Sun: Leo - Moon: Virgo - Rising: Sagittarius</h4>
         <h4>Bio</h4>
         <p>Human-focused programmer with a desire to produce compassionate, engaging, and empowering work that brings users closer to themselves and builds community. Skilled creative with experience in a variety of mediums, giving them a singular approach to work, life, and communication.</p>
         <h4>Dating Prefs</h4>
         <p>
           Age:<br/>
           Location:<br/>
           Sign:<br/>
           Interests:<br/>
         </p>
         <h4>Photos</h4>
         <div className='photos'>
         <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img'/></div>
         <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img'/></div>
         <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img'/></div>
         <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img'/></div>
         <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img'/></div>
         <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img'/></div>
     
         </div>
        </div>




        </div>
        
    </div>
  )
}

export default MyAccount