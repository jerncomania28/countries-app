import { useContext, useState } from "react";
import { CountriesContext } from "../../context/countries.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LOCATION_DATA from "../../locationData.json";

//styles
import "./dropDown.styles.scss";
const DropDown = () => {
  const { region, setRegion, changeBackground } = useContext(CountriesContext);

  const [isActive, setIsActive] = useState(false);

  const handleRegion = (e) => {
    setRegion(e.target.textContent);
    setIsActive(!isActive);
  };
  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className="dropdown"
      id={changeBackground ? "dropdown-white" : "dropdown-dark"}
    >
      <div
        className="dropdown-header"
        onClick={handleActive}
        id={changeBackground ? "dropdown-white" : "dropdown-dark"}
      >
        <div className="dropdown-header_text">{region}</div>
        <FontAwesomeIcon
          icon={isActive ? "fa-caret-up" : "fa-caret-down"}
          className="dropdown-icon"
        />
      </div>

      {isActive && (
        <ul
          className="dropdown-content"
          id={changeBackground ? "white" : "dark"}
        >
          {LOCATION_DATA.map((location) => {
            return (
              <li
                onClick={handleRegion}
                key={location.id}
                className="dropdown-content_item"
              >
                {location.country}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
