import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const EditProfile = ({user, updateUser}) => {
  const history = useNavigate()
  const id = useParams().id
  console.log(id)
  const editUser = user.find(e => e._id === id)
  console.log(editUser)

  // const [initialState, setInitialState] = useState(initialState)
  const [editFormState, setEditFormState] = useState(editUser)

  const handleChange = event => {
    setEditFormState({ ...editFormState, [event.target.firstName]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(editFormState);
    updateUser(editFormState, id)
    history('/')
  }

  // const deleteUser = () => {
  //   props.deleteUser(id)
  //   history('/')
  // }

  return(
   <div className='selectedUser'>
     <h1>{editUser.firstName}</h1>
     {/* <button id="delete" onClick={deleteUser}>
            DELETE
          </button> */}
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>firstName:</label>
      <input value={editFormState.firstName}
       type='text' 
       placeholder='first name' 
       onChange={handleChange} />
      <button type='submit'>Edit Name</button>
    </form>
   </div>
  );
}

export default EditProfile  




