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

  // const DisplayCountries = () => {

  // };

  return (
    <div className="card-group">
      {console.log(countries)}

      {countries.map((item, i) => {
        return <Card key={i} name={item.name.common} flag={item.flags.png} />;
      })}
    </div>
  );
}

export default CardGroup;
