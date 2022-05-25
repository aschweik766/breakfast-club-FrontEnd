import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const EditProfile = ({user, updateUser}) => {
  const history = useNavigate()
  const id = useParams().id
//   console.log(id)
  const editUser = user.find(e => e._id === id)
//   console.log(editUser)

//   const [initialState] = {editUser}
  const [editFormState, setEditFormState] = useState(editUser)

  const handleChange = event => {
    setEditFormState({ ...editFormState, id, [event.target.firstName]: event.target.value })
    event.preventDefault()
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(editFormState);
    updateUser(editFormState, id)
    history('/')
  }


// useEffect( () => {
//     updateUser(editFormState, id)
// }, [])


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
      <label htmlFor='firstName'>First Name:</label>
      <input value={editFormState.firstName} 
       type='text' 
       placeholder=""
       onChange={handleChange} />
      <button type='submit'>Edit Name</button>
    </form>
   </div>
  );
}

export default EditProfile  




