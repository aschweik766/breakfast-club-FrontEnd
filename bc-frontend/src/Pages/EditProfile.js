// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './EditProfile.css'

const EditProfile = ({login, setLogin, users , updateUsers}) => {

  console.log(login)
  const history = useNavigate()
  const { id } = useParams()
console.log(users)  
// const loggedInUser = users.find(data => data._id === id)


  const [updateForm, setUpdateForm] = useState("")

  const url = `https://horoscopedatingapp-backend.herokuapp.com/users/${id}`

  function getUser () {
      fetch(url)
      .then((res) => res.json())
      .then((res) => setLogin(
        {
          firstName: res.firstName,
          lastName: res.lastName,
          location: res.location,
          email: res.email,
          username: res.username,
          password: res.password,
          image: res.image,
          interestedIn: res.interestedIn,
          relationshipStatus: res.relationshipStatus,
          lookingFor: res.lookingFor,
          bio: res.bio,
          interests: res.interests
      }))
      .catch(console.error) 
  }

  const updateUser = async (user, id) => {
    await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    getUser();
  };

  const handleChange = event => {
      setUpdateForm({ ...setUpdateForm, [event.target.name]: event.target.value })  
  }

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setUser(values => ({...values, [name]: value}))
  // }




  // handlesubmit for form
  const handleSubmit = (event) => {
      event.preventDefault()
      updateUser(updateForm, id)
      // redirect people back to index
      history('/home')
  }

// useEffect(() => getUser(),[])

console.log(updateForm)  


  if(!login) {
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div>
      <h1>Display and Edit User</h1>
      <h3>Editing Profile Information for {login.firstName} </h3> <h3>{login.lastName}</h3>
      <form 
      // onSubmit={handleSubmit} 
      className='editForm'>
      
      <label htmlFor='firstName'>Edit First Name: </label>
        <input
            type='text'
            name='firstName'
            onChange={handleChange}
            value={updateForm.firstName}
            // placeholder='name'
            ></input>
          <br></br>

          <label htmlFor='lastName'>Edit Last Name: </label>
          <input
            type='text'
            name='lastName'
            onChange={handleChange}
            value={updateForm.lastName}
            // placeholder='last name'
            ></input>
          <br></br>

          <label htmlFor='location'>Edit Location: </label>
          <input
            type='text'
            name='location'
            onChange={handleChange}
            value={updateForm.location}
            // placeholder='location'
            ></input>
          <br></br>

          <label htmlFor='email'>Change Email: </label>
          <input
            type='text'
            name='email'
            onChange={handleChange}
            value={updateForm.email}
            // placeholder='edit email'
            ></input>
            <br></br>

        
          <label htmlFor='username'>Change Username: </label>
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={updateForm.username}
            // placeholder='edit username'
            ></input>
          <br></br>
          
        <label htmlFor='password'> Reset Password: </label>
        <input
            type='text'
            name='password'
            onChange={handleChange}
            value={updateForm.password}
            // placeholder='Reset password'
            ></input>
          <br></br>
<img src={login.image}></img>
          <label htmlFor='image'> Update Profile Picture: </label>
          <input
          type='text'
          name='image'
          onChange={handleChange}
          value={updateForm.image}
          // placeholder='Update profile picture'
          ></input>
          <br></br>

        <label htmlFor='interestedIn'>Update what you're Interested In:  </label>
        <select
        name='interestedIn'
        onChange={handleChange}
        value={updateForm.interestedIn} 
        >
          <option>Men</option>
          <option>Women</option>
          <option>Non-binary</option>
          <option>Everyone</option>
        </select>
        <br></br>
          
        <label htmlFor='relationshipStatus'> Update Relationship Status: </label>
        <select
        name='relationshipStatus'
        onChange={handleChange}
        value={updateForm.relationshipStatus} 
        >
          <option>Single</option>
          <option>Poly</option>
          <option>Married</option>
      </select>
      <br></br>

        <label htmlFor='lookingFor'> Update what you're Looking For: </label>
        <select  
        name='lookingFor' 
        onChange={handleChange}
        value={updateForm.lookingFor} 

        >
          <option>Fun</option>
          <option>Relationship</option>
          <option>Not sure</option>
        </select>
        <br></br>

        <label htmlFor='bio'> Update Bio: </label>
        <textarea
        rows='5' cols='20'
        name='bio'
        onChange={handleChange}
        value={updateForm.bio}
        // placeholder='edit bio'
        ></textarea>          
        <br></br>
    
        <label htmlFor='interests'> Update Top Interest: </label>
        <select
          name='interests'
          onChange={handleChange}
          value={updateForm.interests}
          // placeholder='edit interest'

          >
            <option value="Cooking">Cooking</option>
                    <option value="Gardening">Gardening</option>
                    <option value="TV">TV</option>
                    <option value="Film">Film</option>
                    <option value="Photography">Photography</option>
                    <option value="Sports">Sports</option>
                    <option value="Hiking/Camping">Hiking/Camping</option>
                    <option value="Traveling">Traveling</option>
                    <option value="Music">Music</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Gaming">Gaming</option>
                    <option value="Anime">Anime</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Reading">Reading</option>
                    <option value="Writing">Writing</option>
                    <option value="Art/Design">Art/Design</option>
                    <option value="Hunting/Fishing">Hunting/Fishing</option>
                    <option value="Breweries/Bars">Breweries/Bars</option>
                    <option value="Clubs">Clubs</option>
                    <option value="Concerts">Concerts</option>
                    <option value="Theater">Theater</option>
                    <option value="Drag">Drag</option>
                    <option value="Modeling">Modeling</option>
                    <option value="Dancing">Dancing</option>
                    <option value="Singing">Singing</option>
                    <option value="Museums">Museums</option>
                    <option value="Skating">Skating</option>
                    <option value="Carpentry">/Carpentry/</option>
                    <option value="Sewing">Sewing</option>
            </select>
          <br></br>

        <button onClick={handleSubmit}>Submit</button>
      </form>
       {/* <button id='delete' onClick={props.deleteUser}> Delete </button> */}
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
   
//   const putURL = 'http://localhost:3001/myaccount/'
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
//        placeholder=''
//        onChange={handleChange} />
//       <button type='submit'>Edit Name</button>
//     </form>
//    </div>
//   );
// }





