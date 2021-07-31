import { useState } from "react";
import "./App.css";
import Map from "./Map";
import SearchModal from "./SearchModal";

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const getSearchResults = (choice) => {
    setSearchResults(choice);
  };

  console.log("search results", searchResults);
  return (
    <div className="h-screen flex flex-col">
      <SearchModal getSearchResults={getSearchResults} />
      <Map specialty={searchResults} />
    </div>
  );
}

export default App;
