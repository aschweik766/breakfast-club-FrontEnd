import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='body'>
        <header className='notmobile'>
<<<<<<< HEAD
    <nav className='nav-left'><Link to='/'>Home</Link>  Matches   <Link to='/starchart'>Chart</Link>   <Link to='/users'>Display Users</Link></nav>
=======
    <nav className='nav-left'><Link to='/'>Home</Link>  Matches   <Link to='/horoscope'>Horoscope</Link></nav>
>>>>>>> 1b9827544468e1adbd6529494afa392014e294b5
      <h1 className='page-title'>Horoscope Dating</h1>
    <nav className='nav-right'><Link to='/myaccount'>My Account</Link> Sign Out</nav>
    </header>

    <header className='mobile'>
    <h1 className='page-title'>Horoscope Dating</h1>
   
    <nav><Link to='/'>Home</Link> <Link to='/users'>Display Users</Link> Matches Chart <Link to='/myaccount'>My Account</Link> Sign Out</nav>
    </header>
    </div>
  )
}

export default Header