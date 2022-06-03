import { useNavigate } from "react-router-dom";
import "./card-item.styles.scss";

const CardItem = ({ item, changeBackground }) => {
  const {
    name: { common },
    flags: { svg },
    population,
    region,
    capital,
  } = item;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${common}`);
  };

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div
      className="card-container"
      id={changeBackground ? "card-white" : "card-dark"}
      onClick={handleNavigate}
    >
      <img src={svg} alt="img" className="image" />

      <div className="card-container_content">
        <h3 className="country_name">{common}</h3>

        <ul className="property_list">
          <li>Population : {numberWithCommas(population)}</li>
          <li>Region : {region}</li>
          <li>Capital : {capital && capital[0]}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
