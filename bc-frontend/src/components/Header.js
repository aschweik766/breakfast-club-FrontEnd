import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import MyAccount from './MyAccount'

function Header() {
  return (
    <div className='body'>
        <header className='notmobile'>
    <nav className='nav-left'><Link to='/'>Home</Link>  Matches   Chart</nav>
      <h1 className='page-title'>Horoscope Dating</h1>
    <nav className='nav-right'><Link to='/myaccount'>My Account</Link> Sign Out</nav>
    </header>

    <header className='mobile'>
    <h1 className='page-title'>Horoscope Dating</h1>
   
    <nav><Link to='/'>Home</Link> Matches Chart <Link to='/myaccount'>My Account</Link> Sign Out</nav>
    </header>
    </div>
  )
}

export default Header