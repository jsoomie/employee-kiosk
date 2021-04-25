const SortButton = () => {
  return (
    <div>
      <label htmlFor="sort">Sort By: </label>
      <select name="sort" id="sort-button">
        <option value="ascending">Ascending</option>
        <option value="decending">Descending</option>
      </select>
    </div>
  );
};

export default SortButton;
