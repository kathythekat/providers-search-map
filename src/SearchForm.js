import specialties from "./specialties.json";

const SearchForm = () => {
  const specialtiesList = Object.values(specialties);
  console.log(specialtiesList);
  /**
   * TODO: handleChange, handleSubmit
   */

  //TODO: only show 6-8 results at a time and have show more arrow
  return (
    <form className="flex flex-col">
      {specialtiesList.map((specialty) => (
        <div className="flex items-center">
          <input
            key={specialty}
            type="checkbox"
            value={specialty}
            name={specialty}
            id={specialty}
          ></input>
          <label className="p-2" for={specialty}>
            {specialty}
          </label>
        </div>
      ))}
    </form>
  );
};

export default SearchForm;
