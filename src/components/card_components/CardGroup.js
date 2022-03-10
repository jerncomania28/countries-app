import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "../../style/CardGroup.css";

function CardGroup({ searchValue, region, changeBackground }) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((response) => setCountries(response.data))
      .catch((err) => console.log(err));
  }, [region]);

  {console.log(countries)}

  // const DisplayCountries = () => {
  // };

  return (
    <div className="card-group">

      {countries
        .filter( country => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, i) => <Card key={i} name={item.name.common} flag={item.flags.png} /> )
      }
    </div>
  );
}

export default CardGroup;
