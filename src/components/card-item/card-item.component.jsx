import './card-item.styles.scss';

const CardItem = ({name , flag ,changeBackground}) => {
  return (
    <div className="card-container" id={changeBackground ? "white" : "dark"}>
      <img src={flag} alt="img" className="image" />

      <div className="card-container_content">
        <h3 className="country_name">{name}</h3>

        <ul className="property_list">
          <li>Population : 232342</li>
          <li>Reagion : Europe</li>
          <li>Capital : Berlin</li>
        </ul>
      </div>
    </div>
  );
};


export default CardItem;
