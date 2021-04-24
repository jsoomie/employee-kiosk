import { GiMagnifyingGlass } from "react-icons/gi";

const Search = () => {
  return (
    <div id="searchbar">
      <input id="search-input" type="text" placeholder="Search Name" />
      <button>
        <GiMagnifyingGlass />
      </button>
    </div>
  );
};

export default Search;
