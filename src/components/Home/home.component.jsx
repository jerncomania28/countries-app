import React, { useState , useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import CardGroup from '../card_components/CardGroup';
import DropDown from "../DropDown/dropDown.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//styles 
import './home.styles.scss';

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("africa");

  const {changeBackground} =  useContext(CountriesContext);

  return (
    <div className={changeBackground ? "container-white" : "container-dark"}>
     
      <div className="search-select">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            placeholder="Search for a country..."
            value={searchValue}
            className="search-input"
            id={changeBackground ? "white":"dark"}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <FontAwesomeIcon
            icon="fa-magnifying-glass"
            className="magnifying-glass"
            id={changeBackground ? "white":"dark"}
          />
        </div>

        {/* DROPDOWN  */}

        <DropDown region={region} setRegion={setRegion} changeBackground={changeBackground}/>
      </div>

      <CardGroup
        searchValue={searchValue}
        region={region}
        changeBackground={changeBackground}
      />
    </div>
  );
}

export default Home;
