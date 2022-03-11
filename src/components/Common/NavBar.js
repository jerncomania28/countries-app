import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/NavBar.css";

function NavBar({ changeBackground, setBackground }) {
  return (
    <div className="nav-bar" id={changeBackground ? "white":"dark"}>
      <h1 className="nav-bar_heading">Where in the World ? </h1>

      <div className="nav-bar_iconText">
        <FontAwesomeIcon
          icon="fa-moon"
          onClick={() => {
            setBackground(!changeBackground);
          }}
          id={changeBackground ? "icon-dark" : "icon-white"}
        />{" "}
        Dark Mode
      </div>
    </div>
  );
}

export default NavBar;
