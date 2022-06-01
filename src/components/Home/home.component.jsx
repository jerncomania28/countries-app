import React, {useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import CardGroup from "../card-group/card-group.component";
import DropDown from "../DropDown/dropDown.component";
import InputItem from "../input-item/input-item.component";

//styles
import "./home.styles.scss";

const Home = () => {
  const {changeBackground, searchValue, setSearchValue} = useContext(CountriesContext);

  return (
    <div className={changeBackground ? "container-white" : "container-dark"}>
      <div className="search-select">
        <InputItem
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          changeBackground={changeBackground}
        />

        {/* DROPDOWN  */}

        <DropDown />
      </div>

      <CardGroup />
    </div>
  );
};

export default Home;
