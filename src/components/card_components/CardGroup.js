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

  const DisplayCountries = () => {

    return countries.filter(item=>{
      if(searchValue===""){
        return item;
      }else if(item.name.common.toLowerCase().includes(searchValue.toLowerCase)){
        return item
      }
    }).map((item, i) => {
      return <Card key={i} name={item.name.common} flag={item.flags.png} />;
    });
  };

  return (
    <div className="card-group">
      {console.log(countries)}

      {DisplayCountries()}
    </div>
  );
}

export default CardGroup;
