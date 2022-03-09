import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/NavBar.css";

function NavBar({ changeBackground, setBackground }) {
  return (
    <div className="nav-bar">
      <h1 className="nav-bar_heading">Where in the World ? </h1>

      <div className="nav-bar_iconText">
        <FontAwesomeIcon
          icon="fa-moon"
          onClick={() => {
            setBackground(!changeBackground);
          }}
          id={changeBackground ? "icon-white" : "icon-dark"}
        />{" "}
        Dark Mode
      </div>
    </div>
  );
}

export default NavBar;
