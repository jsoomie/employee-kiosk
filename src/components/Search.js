import { useCallback } from "react";

const Search = ({ onSearchChange }) => {
  const handleSearchChange = useCallback(
    (event) => {
      onSearchChange(event.target.value);
    },
    [onSearchChange]
  );
  return (
    <div id="searchbar">
      <input
        id="search-input"
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
