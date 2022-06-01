import React from 'react'
import './MyAccount.css'
import { Link } from 'react-router-dom'

function MyAccount({ users, login }) {
  console.log(login)
  let user = users[0]
  console.log(login.firstName)
  if (!(users && login)) {
    return(<>nothing</>)
  }
  return (
    <div className=''>
      <div className='page-cont'>
        <div className='acct-header'>
        <h2>My Account</h2>
        
          <div className='myacct-cont'>
          <img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='default-img' />
          <div> <h3>{login.firstName}, {login.DOBmonth}/{login.DOBday}/{login.DOByear} - {login.location}</h3>
          <h4>Zodiac Sign: {login.zodiacSign}</h4>
          <h4>Likes: Painting, going to the beach, cooking</h4>
          </div>
          </div>
         <div className='acctBio'>
           <h3>About Me</h3>
          <p>Human-focused programmer with a desire to produce compassionate, engaging, and empowering work that brings users closer to themselves and builds community. Skilled creative with experience in a variety of mediums, giving them a singular approach to work, life, and communication.</p>
          </div>
       
          
        
        
          
          <h3>Photos</h3>
          <div className='photos'>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
            <div className='photo-cont'><img src="https://thispersondoesnotexist.com/image" alt="profile-img" className='profile-img' /></div>
          </div>
        </div>
      </div>
      <br/><br/><br/>
      <Link to={`/users/${user._id}`} > <button>Update Preferences </button> </Link>
    </div>
  )
}
export default MyAccount