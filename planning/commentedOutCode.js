///old from SignUp.js///
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
