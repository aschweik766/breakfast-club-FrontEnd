import React, {useEffect} from 'react'
import './MyAccount.css'
import { Link } from 'react-router-dom'


function MyAccount({ users, login, deleteUsers}) {
  console.log(login)
  console.log(login.firstName)

  const deleteUser = () => {
    deleteUsers(login._id)
  }


  useEffect(() => {
deleteUser()  
}, [])

  if (!(users && login)) {
    return(<></>)
  }

  const birthdateString = login.DOBmonth+"/"+login.DOBday+"/"+login.DOByear
  console.log(birthdateString)

//https://www.codegrepper.com/code-examples/javascript/calculate+age+from+date+of+birth+in+javascript

  function getAge(dateString) 
  {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age;
  }
 console.log(getAge(birthdateString))

 const age = getAge(birthdateString)

  return (
    <div className=''>
      <div className='page-cont'>
        <div className='acct-header'>
        <h2>My Account</h2>
        
          <div className='myacct-cont'>
          <img src={login.image} alt="profile-img" className='default-img' />
          <div className='acctInfo'> <h3>{login.firstName}, {age} - {login.location}</h3>
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
      <Link to={`/delete/${login._id}`} > <button onClick={deleteUser}>Delete Account</button> </Link> 
    </div>
  )
}
export default MyAccount