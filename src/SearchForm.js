import specialties from "./specialties.json";
import splitSpecialties from "./helpers/splitSpecialties";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SearchForm = ({ getSearchResults, hideModal }) => {
  const specialtiesList = Object.values(specialties);
  const groupedSpecialties = splitSpecialties(specialtiesList);
  const [resultsIdx, setResultsIdx] = useState(0);
  const [specialtyChoice, setSpecialtyChoice] = useState([]);

  function handleChange(e) {
    setSpecialtyChoice((choice) => [...choice, e.target.value]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getSearchResults(specialtyChoice);
    console.log("submitted");
    hideModal();
  }

  function toggleResults() {
    setResultsIdx((results) =>
      results >= groupedSpecialties.length - 1 ? 0 : results + 1
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {groupedSpecialties[resultsIdx].map((specialty) => (
        <div key={specialty} className="flex items-center">
          <input
            onChange={handleChange}
            type="checkbox"
            value={specialty}
            name={specialty}
            id={specialty}
          ></input>
          <label className="p-2" htmlFor={specialty}>
            {specialty}
          </label>
        </div>
      ))}
      <div className="flex flex-col items-center pt-3">
        Show more
        <FontAwesomeIcon
          onClick={toggleResults}
          icon={faAngleDown}
          size="2x"
          className="cursor-pointer hover:text-gray-500"
        />
      </div>
      <div className="flex items-center justify-end pt-4 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="submit"
          onSubmit={handleSubmit}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
