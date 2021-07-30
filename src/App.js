import { useState } from "react";
import "./App.css";
import Map from "./Map";
import SearchModal from "./SearchModal";

function App() {
  const [results, setResults] = useState(null);
  const getLocation = (choice) => {
    setResults(choice);
  };
  return (
    <div className="h-screen flex flex-col">
      <SearchModal getLocation={getLocation} />
      <Map specialty={results} />
    </div>
  );
}

export default App;
