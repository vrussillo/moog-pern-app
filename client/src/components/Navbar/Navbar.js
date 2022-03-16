import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import { ButtonSignup } from "./ButtonSignup";
// import { ButtonLogin } from "./ButtonLogin";
import "./Navbar.css";
import image from "./mooglogo.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="moog-container">
          <a href="https://www.moogmusic.com/">
            <h1 className="navbar-logo">
              <img className="moog-img" src={image} alt="Moog" />
            </h1>
          </a>
        </div>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ButtonSignup>Sign Up</ButtonSignup>
        {/* <ButtonLogin>Login</ButtonLogin> */}
      </nav>
    );
  }
}

export default Navbar;
