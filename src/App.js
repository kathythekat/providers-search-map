import "./App.css";
import Map from "./Map";
import SearchModal from "./SearchModal";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <SearchModal />
      <Map />
    </div>
  );
}

export default App;
