import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="">
      <header className="notmobile">
        
      <Link to="/home" className="homeLink">
        <div className="logo-cont">
          <h1 className="page-title">ALIGN</h1>
          <h4 className="subtitle">connect with astrology</h4>
          </div>
        </Link>
        <nav> 
          <div className="nav-cont">    <Link to={'/matches'}><p>Matches</p></Link> <Link to="/horoscope"><p>Horoscopes</p></Link>
          <Link to="/users"><p>Display Users</p></Link>
          <Link to="/myaccount"><p>My Account</p></Link>
          <Link to="/signup"><p>Sign Up</p></Link> <Link to="/"><p>Log In</p></Link> </div>
       
        </nav>
      </header>

      <header className="mobile">
        <Link to="/" className="homeLink">
        <div className="logo-cont">
          <h1 className="page-title">ALIGN</h1>
          <h4 className="subtitle">connect with astrology</h4>
          </div>
        </Link>

        <nav> 
          <div className="nav-cont">   <p>Matches</p> <Link to="/horoscope"><p>Horoscopes</p></Link>
          <Link to="/users"><p>Display Users</p></Link>
          <Link to="/myaccount"><p>My Account</p></Link>
          <Link to="/signup"><p>Sign Up</p></Link> <Link to="/"><p>Log In</p></Link> </div>
        </nav>
      </header>
    </div>
  );
}
export default Header;
