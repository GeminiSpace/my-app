import "./search-box.css";

const SearchBox = ({ onChangeHandler }) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
