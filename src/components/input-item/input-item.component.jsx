import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//styles
import "./input-item.styles.scss";

const InputItem = ({ searchValue, setSearchValue, changeBackground }) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        name="search"
        placeholder="Search for a country..."
        value={searchValue}
        className="search-input"
        id={changeBackground ? "white" : "dark"}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      <FontAwesomeIcon
        icon="fa-magnifying-glass"
        className="magnifying-glass"
        id={changeBackground ? "white" : "dark"}
      />
    </div>
  );
};

export default InputItem;
