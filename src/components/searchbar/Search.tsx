import "./search.scss";
import { useState, ChangeEvent, useEffect } from "react";
import _debounce from "lodash/debounce";
interface SearchProps {
  onSearch?: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = _debounce((term: string) => {
    if (onSearch) {
      onSearch(term);
    }
  }, 500);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);
  return (
    <>
      <form className="input-form">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default Search;
