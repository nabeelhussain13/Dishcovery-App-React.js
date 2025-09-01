import { IoMdSearch } from "react-icons/io";

const SearchBar = ({ searchVal, searchHandler, onEnterClick }) => {
  return (
    <div className="input-group mb-3 search-bar">
      <input
        type="text"
        className="form-control"
        placeholder="Try searching for ingredients like 'chicken', 'tomato', or 'pasta'."
        ref={searchVal}
        onKeyDown={onEnterClick}
      />
      <button
        className="btn my-btn"
        type="button"
        id="button-addon2"
        onClick={searchHandler}
      >
        <IoMdSearch />
      </button>
    </div>
  );
};

export default SearchBar;
