import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'



const EditProfile = (props) => {
  console.log(props)
  const history = useNavigate()
  const {id}  = useParams()
  const user = props.user
  const selectedUser = user.find(u => u._id === id)

  const [editFormState, setEditFormState] = useState(null);

  const handleChange = event => {
    setEditFormState({ ...editFormState, [event.target.firstName]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(editFormState);
    props.updateUser(editFormState, id)
    history('/')
  }

  const deleteUser = () => {
    props.deleteUser(id)
    history('/')
  }

  return(
   <div className='selectedUser'>
     <h1>{selectedUser.firstName}</h1>
     <button id="delete" onClick={deleteUser}>
            DELETE
          </button>
    <form onSubmit={handleSubmit}>
      <label htmlFor='firstName'>firstName:</label>
      <input value={editFormState.firstName} type='text' placeholder='first name' onChange={handleChange} />
      <button type='submit'>Edit Name</button>
    </form>
   </div>
  );
}

export default EditProfile  



//where does this need to go? and how do we import/pass the (user props/getUser() so I can use this form?)
//It could be added to my account, as well as the post(sign up form), and the delete route.


//   const updateUser = (user, id) => {
//     const putURL = "http://localhost:3001/myaccount/edit/"
//     fetch (putURL + id, {
//       method: 'PUT',
//       headers: {'Content-Type': 'application/json'},
//       body: JSON.stringify(selectedUser)
//     })
//     getUser()


// const deleteUser = async id => {
//   // make delete request to create people
//   await fetch(deleteURL + id, {
//       method: "delete",
//       })
//   // update list of people
//   getUser()
// }

