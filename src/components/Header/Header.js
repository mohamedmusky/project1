import React from 'react'
import "./Header.css";
import logo from "../../assets/navbarlogo.svg";
const Header = () => {
  return (
    <header>
    <div className="row">
      <div className="col-sm">
        <div className="img">
          <img src={logo} alt="logo" />
        </div>
        <div className="grp2">
          <a href="" class="buttonmenu">              
            <img src={hum} alt="hum" />
          </a>
        </div>
      </div>

      <div className="col-sm col1">
        <div className="user-container">
          <div className="user">
            <img src={user} alt="user" />
          </div>
          <div className="username">Username</div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header