import React, { useState } from "react";
import NavBar from "./components/Common/NavBar";
import CardGroup from "./components/card_components/CardGroup";
import "./style/Home.css";
import DropDown from "./components/Common/DropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [region, setRegion] = useState("africa");
  const [changeBackground, setChangeBackground] = useState(false);

  return (
    <div className={changeBackground ? "container-white" : "container-dark"}>
      <NavBar
        changeBackground={changeBackground}
        setBackground={setChangeBackground}
      />

      <div className="search-select">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            placeholder="Search for a country..."
            value={searchValue}
            className="search-input"
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />

          <FontAwesomeIcon
            icon="fa-magnifying-glass"
            className="magnifying-glass"
          />
        </div>

        {/* DROPDOWN  */}

        <DropDown region={region} setRegion={setRegion} />
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
