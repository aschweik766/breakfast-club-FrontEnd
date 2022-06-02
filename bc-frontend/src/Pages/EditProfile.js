import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './SignUp.css'

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
          email: res.email,
          username: res.username,
          password: res.password,
          location: res.location,
          image: res.image,
          bio: res.bio,
          interestedIn: res.interestedIn,
          lookingFor: res.lookingFor,
          interests: res.interests
      }))
      .catch(console.error) 
  }


  const handleChange = event => {
      setUser({ [event.target.name]: event.target.value })  
      
  }

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUser(values => ({...values, [name]: value}))
  // }




  // handlesubmit for form
  const handleSubmit = (event) => {
      event.preventDefault()
      props.updateUsers(user, id)
      // redirect people back to index
      history('/users')
  }

useEffect(() => getUser(),)

  if(!user) {
    return (
      <h1>Loading...</h1>
    )
  }
  console.log(setUser)
  console.log(user)
  // console.log(user.firstName)
  return (
    <div className='user'>
      <h1>Display and Edit User</h1>
      <h2>Editing Profile Information for {user.firstName} {user.lastName}</h2>
      <form onSubmit={handleSubmit}>
        <input
            type='text'
            value={setUser.firstName}
            name='firstName'
            placeholder='name'
            onChange={handleChange}
            />
          <br></br>
          <input
            type='text'
            value={setUser.lastName}
            name='lastName'
            placeholder='last name'
            onChange={handleChange}
            />
          <br></br>
        
          <input
            type='text'
            value={setUser.username}
            name='username'
            placeholder='edit username'
            onChange={handleChange}
            />
          <br></br>
        <input
            type='text'
            value={setUser.email}
            name='email'
            placeholder='edit email'
            onChange={handleChange}
            />
            <br></br>
        <input
            type='text'
            value={setUser.password}
            name='password'
            placeholder='edit password'
            onChange={handleChange}
            />
          <br></br>
        <input
          type='text'
          value={setUser.interestedIn}
          name='interestedIn'
          placeholder='edit dating interests'
          onChange={handleChange}
          />
          <br></br>
        <input
          type='text'
          value={setUser.bio}
          name='bio'
          placeholder='edit bio'
          onChange={handleChange}
          />
          <br></br>
        <input
          type='text'
          value={setUser.image}
          name='image'
          placeholder='edit profile picture'
          onChange={handleChange}
          />
          <br></br>
        <input
          type='text'
          value={setUser.interests}
          name='interests'
          placeholder='edit interest'
          onChange={handleChange}
          />
          <br></br>
        <input type="submit"/>
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





