import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './EditProfile.css'

const EditProfile = (props) => {

  const history = useNavigate()
  const { id } = useParams()


  const [user, setUser] = useState(null)

  const url = `http://localhost:3001/users/${id}`

  function getUser () {
      fetch(url)
      .then((res) => res.json())
      .then((res) => setUser(
        {
          firstName: res.firstName,
          lastName: res.lastName,
          location: res.location,
          email: res.email,
          username: res.username,
          password: res.password,
          image: res.image,
          interestedIn: res.interestedIn,
          lookingFor: res.lookingFor,
          bio: res.bio,
          interests: res.interests
      }))
      .catch(console.error) 
  }


  const handleChange = event => {
      setUser({ [event.target.name]: event.target.value })  
      
  }

  // handlesubmit for form
  const handleSubmit = (event) => {
      event.preventDefault()
      props.updateUsers(user, id)
      // redirect people back to index
      history('/users')
  }

useEffect(() => getUser(),[])

  if(!user) {
    return (
      <h1>Loading...</h1>
    )
  }
  // console.log(setUser)
  console.log(user)
  // console.log(user.firstName)
  return (
    <div>
      <h1>Display and Edit User</h1>
      <h3>Editing Profile Information for {user.firstName} {user.lastName}</h3>
      <form onSubmit={handleSubmit} className="editForm">
      
      <label htmlFor="firstName">Edit First Name: </label>
        <input
            type='text'
            value={setUser.firstName}
            name='firstName'
            // placeholder='name'
            onChange={handleChange}
            />
          <br></br>

          <label htmlFor="lastName">Edit Last Name: </label>
          <input
            type='text'
            value={setUser.lastName}
            name='lastName'
            // placeholder='last name'
            onChange={handleChange}
            />
          <br></br>

          <label htmlFor="location">Edit Location: </label>
          <input
            type='text'
            value={setUser.location}
            name='location'
            // placeholder='location'
            onChange={handleChange}
            />
          <br></br>

          <label htmlFor="email">Change Email: </label>
          <input
            type='text'
            value={setUser.email}
            name='email'
            // placeholder='edit email'
            onChange={handleChange}
            />
            <br></br>

        
          <label htmlFor="username">Change Username: </label>
          <input
            type='text'
            value={setUser.username}
            name='username'
            // placeholder='edit username'
            onChange={handleChange}
            />
          <br></br>
          
        <label htmlFor="password"> Reset Password: </label>
        <input
            type='text'
            value={setUser.password}
            name='password'
            // placeholder='Reset password'
            onChange={handleChange}
            />
          <br></br>

          <label htmlFor="image"> Update Profile Picture: </label>
          <input
          type='text'
          value={setUser.image}
          name='image'
          // placeholder='Update profile picture'
          onChange={handleChange}
          />
          <br></br>

        <label htmlFor="interestedIn">Update what you're Interested In:  </label>
        <select 
        multiple 
        value={setUser.interestedIn} 
        name='interestedIn' 
        onChange={handleChange}
        >
          <option value="" disabled selected>To select multiple, hold down Shift and click on options</option>
          <option>Men</option>
          <option>Women</option>
          <option>Non-binary</option>
        </select>
          <br></br>
          
          <label htmlFor="lookingFor"> Update what you're Looking For: </label>
        <select 
        multiple 
        value={setUser.lookingFor} 
        name='lookingFor' 
        onChange={handleChange}
        >
          <option value="" disabled selected>To select multiple, hold down Shift and click on options</option>
          <option>Fun</option>
          <option>Relationship</option>
          <option>Not sure</option>
        </select>
          <br></br>

          <label htmlFor="bio"> Update Bio: </label>
        <textarea
        rows="5" cols="20"
          value={setUser.bio}
          name='bio'
          // placeholder='edit bio'
          onChange={handleChange}
          />
          <br></br>
    
          <label htmlFor="interests">Update Interests: </label>
        <select
          multiple
          size="6"
          value={setUser.interests}
          name='interests'
          // placeholder='edit interest'
          onChange={handleChange}
          >
            <option value="" disabled selected>To select multiple, hold down Shift and click on options</option>

            <option>Cooking</option>
            <option>TV</option>
            <option>Film</option>
            <option>Photography</option>
            <option>Anime</option>
             <option>Baking</option>
            <option>Dining</option>
            <option>Sports</option>
            <option>Hiking</option>
            <option>Music</option>
            <option>Cycling</option>
            <option>Gaming</option>
            <option>Shopping</option>
            <option>Reading</option>
            <option>Art/Design</option>
            <option>Hunting/Fishing</option>
            <option>Breweries/Bars</option>
            <option>Drag</option>
            <option>Modeling</option>
            <option>Dancing</option>
            <option>Singing</option>
            <option>Cars</option>
            <option>Sewing</option>
            <option>Building/Carpentry/Engineering</option>
            <options>Skating</options>
            <options>Outdoor Sports</options>
            </select>
          <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
       {/* <button id="delete" onClick={props.deleteUser}> Delete </button> */}
    </div>
  )
}

export default EditProfile






///old///
// const EditProfile = ({user, getUser}) => {
//   const history = useNavigate()
//   const id = useParams().id
// //   console.log(id)
//   const editUser = user.find(e => e._id === id)
// //   console.log(editUser)

// //   const [initialState] = {editUser}


// const updateUser = (a, id) => {ß
   
//   const putURL = "http://localhost:3001/myaccount/"
//   fetch (putURL + id, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({firstName: ''})
//   })
  
// }
//   const [editFormState, setEditFormState] = useState(editUser)

//   const handleChange = event => {
//     setEditFormState({ ...editFormState, id, [event.target.firstName]: event.target.value })
//     event.preventDefault()
//   }

//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(editFormState);
//     updateUser(editFormState, id)
//     history('/')
//   }


// // useEffect( () => {
// //     updateUser(editFormState, id)
// // }, [])


//   // const deleteUser = () => {
//   //   props.deleteUser(id)
//   //   history('/')
//   // }

//   useEffect(() => {
//     updateUser()
//     }, [])
    
   

//   return(
//    <div className='selectedUser'>
//      <h1>{editUser.firstName}</h1>
//     
//     <form onSubmit={handleSubmit}>
//       <label htmlFor='firstName'>First Name:</label>
//       <input value={editFormState.firstName} 
//        type='text' 
//        placeholder=""
//        onChange={handleChange} />
//       <button type='submit'>Edit Name</button>
//     </form>
//    </div>
//   );
// }





