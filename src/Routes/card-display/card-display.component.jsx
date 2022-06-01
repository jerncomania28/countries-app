import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../context/countries.context.jsx";

const CardDisplay = () => {
  const { name } = useParams();
  const { countries } = useContext(CountriesContext);
  const [country, setCountry] = useState({});

  // READ 
  // i'm not sure why you did the below .. 
  // it's can lead to an infinite loop hence an infinte rerender 
  // until you crash or hit a proper error boundry 

  // useEffect(() => {
  //   countries &&
  //     setCountry(
  //       countries.find((country) => {
  //         return country.name.common.toLowerCase().includes(name.toLowerCase());
  //       })
  //     );
  // }, [name, countries]);

  // READ
  // you only want to find the country that was requested
  // i see no reason why you even need to listen for changes in the countries array
  // lemme know why ? then i'll mod it further 
  useEffect( () => {
    // we want to return early if the countries is not yet avaialble
    if(!countries) return; 
    // find the country and set it in the component state
    const _country = countries.find(
      country => country.name.common.toLowerCase().includes(name.toLowerCase())
    );
    setCountry(_country);
  }, [countries])

  
  return (
    <div className="card-display-container">
      <h1>Card Display</h1>
      {country && <img src={country.flags.svg} alt="country" />}
    </div>
  );
};

export default CardDisplay;
