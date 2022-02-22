import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <span>SocialNetwork</span>
      <span>Home</span>
      <span>Profile</span>
      <span><Link to="/signin">Sign In</Link>/<Link to="/signup">Sign Up</Link></span>
    </div>
  );
};

export default Header;
