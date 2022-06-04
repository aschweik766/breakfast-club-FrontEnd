///old from EditProfile.js///
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

///old from SignUp.js///
/* cannot get checkbox values to all go into intestedIn array so going to have to just choose 1 */
/* <div>
    <label htmlFor='interestedIn'>Interested In: </label>
    <br></br>
    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Men' /> Men
    <br></br>
    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Women' /> Women
    <br></br>
    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Non-binary' /> Non-binary
    <br></br>
    <input type='checkbox' id='interestedIn' onChange={handleChange} value='Everyone' /> Everyone
    <br></br>
</div>
<br></br> */

/* cannot get checkbox values to all go into interests array so going to have to just choose 1 */
                /* <div>
                    <label htmlFor='interests'> Interests: </label>
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Cooking' /> Cooking
                        <input type='checkbox' id='interests' onChange={handleChange} value='Gardening' /> Gardening
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='TV' /> TV
                        <input type='checkbox' id='interests' onChange={handleChange} value='Film' /> Film
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Photography' /> Photography
                        <input type='checkbox' id='interests' onChange={handleChange} value='Sports' /> Sports
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Camping' /> Camping
                        <input type='checkbox' id='interests' onChange={handleChange} value='Traveling' /> Traveling
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Music' /> Music
                        <input type='checkbox' id='interests' onChange={handleChange} value='Cycling' /> Cycling
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Gaming' /> Gaming
                        <input type='checkbox' id='interests' onChange={handleChange} value='Anime' /> Anime
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Shopping' /> Shopping
                        <input type='checkbox' id='interests' onChange={handleChange} value='Reading' /> Reading
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Writing' /> Writing
                        <input type='checkbox' id='interests' onChange={handleChange} value='Art/Design' /> Art/Design
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Hunting' /> Hunting
                        <input type='checkbox' id='interests' onChange={handleChange} value='Fishing' /> Fishing
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Breweries/Bars' /> Breweries/Bars
                        <input type='checkbox' id='interests' onChange={handleChange} value='Clubs' /> Clubs
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Concerts' /> Concerts
                        <input type='checkbox' id='interests' onChange={handleChange} value='Theater' /> Theater
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Drag' /> Drag
                        <input type='checkbox' id='interests' onChange={handleChange} value='Modeling' /> Modeling
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Dancing' /> Dancing
                        <input type='checkbox' id='interests' onChange={handleChange} value='Singing' /> Singing
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Museums' /> Museums
                        <input type='checkbox' id='interests' onChange={handleChange} value='Skating' /> Skating
                    <br></br>
                    <input type='checkbox' id='interests' onChange={handleChange} value='Carpentry' /> Carpentry
                        <input type='checkbox' id='interests' onChange={handleChange} value='Sewing' /> Sewing
                    <br></br>

                </div>
                <br></br> */
