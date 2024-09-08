import { useContext } from "react";
import micIcon from "../assets/icons/mic.svg";
import searchIcon from "../assets/icons/search.svg";
import { SearchContext } from "../context/SearchContext";

function Search() {
  const { setSearch } = useContext(SearchContext);

  const handleSearch = (e) => {
    let searchValue = e.target.value;
    setSearch(searchValue);
    console.log(searchValue);
  };

  return (
    <>
      <div className="flex justify-between items-center gap-3">
        <div className="flex justify-center items-center w-full bg-neutral-900 rounded-lg">
          <label htmlFor="search">
            <img src={searchIcon} alt="search icon" className="h-12 px-2" />
          </label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="the new song..."
            className="h-12 w-full px-3 bg-transparent border-none outline-none text-lg placeholder:text-gray-400"
            onChange={handleSearch}
          />
        </div>

        <img src={micIcon} alt="mic icon" className="h-12" />
      </div>
    </>
  );
}

export default Search;
