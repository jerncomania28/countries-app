import { useContext } from "react";
import { CountriesContext } from "../../context/countries.context";
import CardItem from "../card-item/card-item.component";


//styles
import "./card-group.styles.scss";

const CardGroup = () => {
  const { countries, searchValue, changeBackground } =
    useContext(CountriesContext);
  return (
    <div className="card-group">
      {countries && countries
        .filter((country) =>
          country.name.common.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((item, i) => (
          <CardItem
            key={i}
            item ={item}
            changeBackground={changeBackground}
          />
        ))}
    </div>
  );
};

export default CardGroup;
