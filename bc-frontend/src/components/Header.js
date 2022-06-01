import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="">
      <div className="border"></div>
      <header className="notmobile">
      <Link to="/home" className="homeLink">
        <div className="logo-cont">
          <h1 className="page-title">ALIGN</h1>
          <h4 className="subtitle">connect with astrology</h4>
          </div>
        </Link>
        <nav> 
          <div className="nav-cont">   <p>Matches</p> <Link to="/horoscope"><p>Horoscopes</p></Link>
          <Link to="/users"><p>Display Users</p></Link>
          <Link to="/myaccount"><p>My Account</p></Link>
          <Link to="/signup"><p>Sign Up</p></Link> <Link to="/login"><p>Log In</p></Link> </div>
       
        </nav>
      </header>

      <header className="mobile">
        <Link to="/home" className="homeLink">
        <div className="logo-cont">
          <h1 className="page-title">ALIGN</h1>
          <h4 className="subtitle">connect with astrology</h4>
          </div>
        </Link>

        <nav> 
          <div className="nav-cont">   <p>Matches</p> <Link to="/horoscope"><p>Horoscopes</p></Link>
          <Link to="/users"><p>Display Users</p></Link>
          <Link to="/myaccount"><p>My Account</p></Link>
          <Link to="/signup"><p>Sign Up</p></Link> <Link to="/login"><p>Log In</p></Link> </div>
        </nav>

      </header>
      <div className="border"></div>
    </div>
  );
}
export default Header;
