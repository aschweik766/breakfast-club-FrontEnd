import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import SignUpForm from './components/SignUpForm'
import EditProfile from './Pages/EditProfile';
import StarChart from './Pages/StarChart';

function App() {

  const [user, setUser] = useState(null)

  function getUser () {
    const url = 'http://localhost:3001/myaccount'
    fetch(url)
    .then((res) => res.json())
    .then((res) => setUser(res[0]))
    .catch(console.error) 
  }

  const updateUser = (id) => {
    const putURL = "http://localhost:3001/edit/"
    fetch (putURL + id, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({firstName: ''})
    })
    
  }

  // const deleteUser = async id => {
  //   // make delete request to create people
  //   await fetch(deleteURL + id, {
  //       method: "delete",
  //       })
  //   // update list of people
  //   getUser()
  // }
  
  useEffect(() => {
  getUser()
  }, [])
  
  if (!user) {
    return(<h1>Loading...</h1>)
  }

  console.log(user._id) 



  return (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/starchart' element={<StarChart />}/>
    <Route path='/myaccount' element={<MyAccount user={user} />} />
    <Route path='/signup' element={<SignUpForm user={user} />} />
    <Route path='/edit/:id' element={<EditProfile user={user} updateUser={updateUser()}/>}/>
  </Routes>
  );
}

export default App;
