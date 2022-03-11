import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/DropDown.css";

function DropDown({ region, setRegion , changeBackground }) {
  const [isActive, setIsActive] = useState(false);

  const items = [
    { id: 1, country: "africa" },
    { id: 2, country: "america" },
    { id: 3, country: "asia" },
    { id: 4, country: "europe" },
    { id: 5, country: "oceania" },
  ];

  return (
    <div className="dropdown" id={changeBackground ? "white":"dark"}>
      <div
        className="dropdown-header"
        onKeyPress={() => setIsActive(!isActive)}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="dropdown-header_text" id={changeBackground? "white":"black"}>{region}</div>
        <FontAwesomeIcon
          icon={isActive ? "fa-caret-up" : "fa-caret-down"}
          className="dropdown-icon"
          id={changeBackground ? "white" : "black"}
        />
      </div>

      {isActive && (
        <ul className="dropdown-content" id={changeBackground ? "white":"dark"}>
          {items.map((item) => {
            return (
              <li
                onClick={(e) => {
                  setRegion(e.target.textContent);
                  setIsActive(!isActive);
                }}
                key={item.id}
                className="dropdown-content_item"
              >
                {item.country}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
