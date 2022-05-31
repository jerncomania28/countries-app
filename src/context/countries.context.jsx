import { createContext, useState } from "react";

export const CountriesContext = createContext({
  countries: [],
  setCountries: () => {},
  changeBackground : false,
  setChangeBackground : ()=>{},
  region : "",
  setRegion :  ()=>{}
});

export const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [changeBackground , setChangeBackground] = useState(false);
  const [region , setRegion] = useState("africa");

  const value = {
    countries,
    setCountries,
    changeBackground,
    setChangeBackground,
    region,
    setRegion
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
