import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { CountriesContext } from "../../context/countries.context.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styles
import "./card-display.styles.scss";

const CardDisplay = () => {
  const { countryName } = useParams();
  const { countries, changeBackground } = useContext(CountriesContext);
  const [country, setCountry] = useState();

  useEffect(() => {
    // we want to return early if the countries is not yet avaialble
    if (!countries) return;
    // find the country and set it in the component state
    const _country = countries.find((country) =>
      country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );
    // update the state
    setCountry(_country);
  }, [countryName, countries]);

  return (
    <div
      className={
        changeBackground
          ? "card-display-container container-white"
          : "card-display-container container-dark"
      }
    >
      <Link to="/countries-app" className="back-button" id={changeBackground ? "white" : "dark"}>
        <FontAwesomeIcon
          icon="fa-arrow-left-long"
          className="back-arrow"
          id={changeBackground ? "white" : "dark"}
        />
        Back
      </Link>
      {country && (
        <div
          className="card-display-container-content"
          id={changeBackground ? "display-dark" : "display-white"}
        >
          <div className="image-container">
            <img src={country.flags.svg} alt={"country"} />
          </div>
          <div className="details">
            <h1>{country.name.common}</h1>
            <div className="details-information">
              <div className="details-information_first">
                <p>
                  <b>Native Name</b> :
                  {Object.values(country.name.nativeName)[0].common}
                </p>
                <p>
                  <b>Population</b> :{country.population}
                </p>
                <p>
                  <b>Region</b> :{country.region}
                </p>
                <p>
                  <b>Sub Region</b> :{country.subregion}
                </p>
                <p>
                  <b>Capital</b> :{country.capital[0]}
                </p>
              </div>
              <div className="details-information_second">
                <p>
                  <b>Top Level Domain</b> :{country.tld[0]}
                </p>
                <p>
                  <b>Currencies</b> :{Object.values(country.currencies)[0].name}
                </p>
                <p>
                  <b>Languages</b> :{Object.values(country.languages)[0]}
                </p>
              </div>
            </div>
            <div className="details-border-countries">
              <p>
                <b>Border Countries</b> :{" "}
                {country.borders
                  .filter((itm, i) => i <= 2)
                  .map((itm) => {
                    return <button id={changeBackground ? "white": "dark"}>{itm}</button>;
                  })}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardDisplay;
