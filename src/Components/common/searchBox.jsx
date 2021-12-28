const SearchBox = ({ name, searchMoevie, onSearchChange }) => {
  return (
    <div className="form-group">
      <input
        onChange={onSearchChange}
        name="search"
        id={name}
        value={searchMoevie}
        className="form-control"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBox;
