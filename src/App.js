import { useState } from "react";
import "./App.css";
import Map from "./Map";
import SearchModal from "./SearchModal";

const DEFAULT_COORDS = [37.9295254, -101.2235221];

function App() {
  const [searchResults, setSearchResults] = useState(null);
  const [defaultPosition, setDefaultPosition] = useState(DEFAULT_COORDS);
  const getSearchResults = (choice) => {
    setDefaultPosition(DEFAULT_COORDS);
    setSearchResults(choice);
  };

  console.log("search results", searchResults);
  return (
    <div className="h-screen flex flex-col">
      <SearchModal getSearchResults={getSearchResults} />
      <Map specialty={searchResults} defaultCoords={defaultPosition} />
    </div>
  );
}

export default App;
