import React from 'react'

const UpdatePreferences = () => {
  return (
    <div>   
        <Link to={`/edit/${user._id}`} > <button onClick={updateUser()}>Update Preferences </button> 
        </Link>
    </div>
  )
}

export default UpdatePreferences