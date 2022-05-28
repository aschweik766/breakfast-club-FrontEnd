import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='body'>
      <header className='notmobile'>
        <nav className='nav-left'>  Matches   <Link to='/horoscope'>Horoscope</Link>   <Link to='/users'>Display Users</Link></nav>
        <Link to='/' className='homeLink'><h1 className='page-title'>Horoscope Dating</h1></Link>
        <nav className='nav-right'><Link to='/myaccount'>My Account</Link> <Link to='/signup'>Sign Up</Link> Sign Out</nav>
      </header>
      <header className='mobile'>
        <h1 className='page-title'>Horoscope Dating</h1>
        <nav><Link to='/'>Home</Link> <Link to='/users'>Display Users</Link> Matches Chart <Link to='/myaccount'>My Account</Link>Sign Out</nav>
      </header>
    </div>
  )
}
export default Header