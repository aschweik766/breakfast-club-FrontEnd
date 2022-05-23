import React, { useState, useEffect } from 'react'
import './MyAccount.css'




function MyAccount() {
  const [user, setUser] = useState(null)


  function getUser () {
    const url = 'http://localhost:3001/myaccount'
    fetch(url)
    .then((res) => res.json())
    .then((res) => setUser(res[0]))
    .catch(console.error) 
  }
  
  useEffect(() => {
  getUser()
  }, [])
  
  if (!user) {
    return(<h1>Loading...</h1>)
  }

  console.log(user)

  return (
    <div className='body'>
      <div className='page-cont'>
      <div className='sidebar'>
      <img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='default-img'/>
      </div>
        <div className='acct-header'>
          <div className='myacct-cont'>
            <h2>My Account</h2>
            <button>Update Preferences</button>
          </div>
         <h3>{user.firstName}, {user.birthday} - {user.location}</h3>
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
     
         </div>
        </div>




        </div>
        
    </div>
  )
}

export default MyAccount