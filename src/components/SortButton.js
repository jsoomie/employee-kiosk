import { useCallback } from "react";

const SortButton = ({ onSortChange }) => {
  const handleSortChange = useCallback(
    (event) => {
      onSortChange(event.target.value);
    },
    [onSortChange]
  );

  return (
    <div>
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" id="sort-button" onChange={handleSortChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default SortButton;
