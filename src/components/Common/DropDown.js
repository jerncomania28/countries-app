import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/DropDown.css";

function DropDown({ region, setRegion }) {
  const [isActive, setIsActive] = useState(false);

  const items = [
    { id: 1, country: "africa" },
    { id: 2, country: "america" },
    { id: 3, country: "asia" },
    { id: 4, country: "europe" },
    { id: 5, country: "oceania" },
  ];

  return (
    <div className="dropdown">
      <div
        className="dropdown-header"
        onKeyPress={() => setIsActive(!isActive)}
        onClick={() => setIsActive(!isActive)}
      >
        <div className="dropdown-header_text">{region}</div>
        <FontAwesomeIcon
          icon={isActive ? "fa-caret-up" : "fa-caret-down"}
          className="dropdown-icon"
        />
      </div>

      {isActive && (
        <ul className="dropdown-content">
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
