import React from "react";
import logo from "../images/logo.JPG";
import { Link } from "react-router-dom";
import headerCamera from "../images/header_camera.JPG";

const TopNavbar = () => {
  return (
    <div className="header">
      <img id="header-logo" src={logo} alt="logo" />
      <Link to="/post">
        <img id="header-camera" src={headerCamera} alt="uploadPost" />
      </Link>
    </div>
  );
};

export default TopNavbar;
