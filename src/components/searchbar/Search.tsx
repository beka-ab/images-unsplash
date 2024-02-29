import "./search.scss";
import { useState, ChangeEvent, FormEvent } from "react";
interface SearchProps {
  onSearch?: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(searchTerm);
    }
  };
  return (
    <>
      <form className="input-form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
