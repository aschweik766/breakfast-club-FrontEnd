import React from "react";
import { Link } from "react-router-dom";


function Header({ loggedIn }) {
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
        <nav style={loggedIn === false ? {display: "none"} : null}> 
          <div className="nav-cont">   <Link to={'/matches'}><p>Matches</p></Link>  <Link to="/horoscope"><p>Check Your Horoscope</p></Link>
          <Link to="/myaccount"><p>My Account</p></Link>
         </div>
       
        </nav>
      </header>

      <header className="mobile">
        <Link to="/home" className="homeLink">
        <div className="logo-cont">
          <h1 className="page-title">ALIGN</h1>
          <h4 className="subtitle">connect with astrology</h4>
          </div>
        </Link>

        <nav style={loggedIn === false ? {display: "none"} : null}> 
          <div className="nav-cont">    <Link to={'/matches'}><p>Matches</p></Link>  <Link to="/horoscope"><p>Check Your Horoscope</p></Link>
          <Link to="/myaccount"><p>My Account</p></Link>
          </div>
        </nav>

      </header>
      <div className="border"></div>
    </div>
  );
}
export default Header;
