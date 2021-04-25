import { useCallback } from "react";

const SortButton = ({ onSortChange }) => {
  // Calls back to setSort in Home.js
  const handleSortChange = useCallback(
    (event) => {
      onSortChange(event.target.value);
    },
    [onSortChange]
  );

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" id="sort-button" onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortButton;
