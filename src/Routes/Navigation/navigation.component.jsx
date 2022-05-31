import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigation.styles.scss";

const Navigation = () => {
  const { changeBackground, setChangeBackground } =
    useContext(CountriesContext);

  return (
    <>
      <div className="nav-bar" id={changeBackground ? "white" : "dark"}>
        <h1 className="nav-bar_heading">Where in the World ? </h1>

        <div className="nav-bar_iconText">
          <FontAwesomeIcon
            icon="fa-moon"
            onClick={() => {
              setChangeBackground(!changeBackground);
            }}
            id={changeBackground ? "icon-dark" : "icon-white"}
          />{" "}
          Dark Mode
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
