import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'



const EditProfile = ({user, updateUser}) => {

  const history = useNavigate()
  const id = useParams().id
//   console.log(id)
//   const editUser = user.find(e => e._id === id)
//   console.log(editUser)

//   const [initialState] = {editUser}
  const [editFormState, setEditFormState] = useState(null)

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

  useEffect(() => {
   
    }, [])

// useEffect( () => {
//     updateUser(editFormState, id)
// }, [])


  // const deleteUser = () => {
  //   props.deleteUser(id)
  //   history('/')
  // }

  return(
   <div className='selectedUser'>
       {user.map((oneUser) => {
           if (oneUser._id === id) {
            setEditFormState(oneUser)
            console.log(editFormState)
    //           return (
    //           <><h1>{editFormState.firstName}</h1>
    
    //           {/* <form onSubmit={handleSubmit}>
    //             <label htmlFor='firstName'>First Name:</label>
    //             <input value={editFormState.firstName} 
    //              type='text' 
    //              placeholder=""
    //              onChange={handleChange} />
    //             <button type='submit'>Edit Name</button>
    //             </form> */}
    //             </>
    //           )
           }
    //   console.log('no match')

       })}
     
    
   </div>
  );
}

export default EditProfile  




