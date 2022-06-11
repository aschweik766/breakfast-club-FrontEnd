import React, { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import './EditProfile.css'

const EditProfile = ({login}) => {

  const history = useNavigate()
  const  id  = useParams().id


  const [updateForm, setUpdateForm] = useState(login)
// const url = `http://localhost:3001/users/${id}`
  const url = `https://horoscopedatingapp-backend.herokuapp.com/users/${id}`
 

  const updateUser = async (login) => {
    await fetch(url, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login),
    });
  };

  const handleChange = event => {
      setUpdateForm({ ...updateForm, [event.target.name]: event.target.value })  
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      updateUser(updateForm, id)
      history('/home')
  }

  useEffect(() => {
    updateUser()
} )



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
            ></input>
          <br></br>

          <label htmlFor='lastName'>Edit Last Name: </label>
          <input
            type='text'
            name='lastName'
            onChange={handleChange}
            value={updateForm.lastName}
            ></input>
          <br></br>

          <label htmlFor='location'>Edit Location: </label>
          <input
            type='text'
            name='location'
            onChange={handleChange}
            value={updateForm.location}
            ></input>
          <br></br>

          <label htmlFor='email'>Change Email: </label>
          <input
            type='text'
            name='email'
            onChange={handleChange}
            value={updateForm.email}
            ></input>
            <br></br>

        
          <label htmlFor='username'>Change Username: </label>
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={updateForm.username}
            ></input>
          <br></br>
          
        <label htmlFor='password'> Reset Password: </label>
        <input
            type='text'
            name='password'
            onChange={handleChange}
            value={updateForm.password}
            ></input>
          <br></br>
<img src={login.image} alt="profile"></img>
          <label htmlFor='image'> Update Profile Picture: </label>
          <input
          type='text'
          name='image'
          onChange={handleChange}
          value={updateForm.image}
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
        ></textarea>          
        <br></br>
    
        <label htmlFor='interests'> Update Top Interest: </label>
        <select
          name='interests'
          onChange={handleChange}
          value={updateForm.interests}
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
    </div>
  )
}

export default EditProfile