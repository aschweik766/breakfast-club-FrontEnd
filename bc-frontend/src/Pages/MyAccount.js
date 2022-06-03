import React from 'react'
import './MyAccount.css'
import { Link } from 'react-router-dom'

function MyAccount({ users, login }) {
  console.log(login)
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
          <div className='acctInfo'> <h3>{login.firstName}, {login.DOBmonth}/{login.DOBday}/{login.DOByear} - {login.location}</h3>
          <h4>Zodiac Sign: {login.zodiacSign}</h4>
          <h4>Likes: {login.interests.map((interest) => {
            return(interest+" ")
          })}</h4>
          </div>
          </div>
         <div className='acctBio'>
           <h3>About Me</h3>
          <p>{login.bio}</p>
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
      <Link to={`/users/${login._id}`} > <button>Update Preferences </button> </Link>
      <Link to ={`/myaccount/${login._id}`} > <button>Delete Account</button></Link>
    </div>
  )
}
export default MyAccount