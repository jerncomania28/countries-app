import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CountriesContext = createContext({
  countries: [],
  setCountries: () => {},
  changeBackground: false,
  setChangeBackground: () => {},
  region: "",
  setRegion: () => {},
  searchValue: "",
  setSearchValue: () => {},
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState();
  const [changeBackground, setChangeBackground] = useState(false);
  const [region, setRegion] = useState("africa");
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => setCountries(response.data))
      .catch((err) => <h1>Error with Link</h1>);
  }, [region]);

  console.log(countries);

  const value = {
    countries,
    setCountries,
    changeBackground,
    setChangeBackground,
    region,
    setRegion,
    searchValue,
    setSearchValue,
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
