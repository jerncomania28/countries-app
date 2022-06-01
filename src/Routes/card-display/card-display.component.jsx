import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext } from "../../context/countries.context.jsx";

//styles
import "./card-display.component.jsx";

const CardDisplay = () => {
  const { name } = useParams();

  const { countries } = useContext(CountriesContext);

  const [country, setCountry] = useState({});

  useEffect(() => {
    countries &&
      setCountry(
        countries.find((country) => {
          return country.name.common.toLowerCase().includes(name.toLowerCase());
        })
      );
  }, [name, countries]);

  // Error : the first time mounting the app , the array is empty ,
  // useEffect calls the function again wahen the array is mounted
  // error boundry for when the array is empty
  // setCountry(countries ? findCountry():);

  return (
    <div className="card-display-container">
      <h1>Card Display</h1>
      {country && <img src={country.flags.svg} alt="country" />}
    </div>
  );
};

export default CardDisplay;
