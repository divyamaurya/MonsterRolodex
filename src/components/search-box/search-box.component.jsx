import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onChnageHandler }) => (
  <input
    type="search"
    className={className}
    placeholder={placeholder}
    onChange={onChnageHandler}
  />
);

export default SearchBox;
