import { useState } from "react";
import UnsplashImagesContainer from "./components/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import Search from "./components/searchbar/Search";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <UnsplashImagesContainer searchTerm={searchTerm} />
    </>
  );
}

export default App;
