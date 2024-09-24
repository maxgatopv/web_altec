const SearchInput = () => {
  return (
    <input
      className={`focus:border-primary m-5 w-full rounded-sm border border-gray-300 px-3 py-1 focus:outline-none lg:m-0 lg:w-52`}
      type="search"
      placeholder="Search entire store here..."
    />
  );
};

export default SearchInput;
