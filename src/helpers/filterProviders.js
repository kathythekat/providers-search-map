import providers from "../providers_with_specialties.json";
import specialtiesCodes from "../specialties.json";

/**
 *
 * @param {selectedSpecialties}
 * @returns filtered providers that match specialties
 * [{id, name, logo, ...specialties:[]}]
 */

//TODO: not quite filtering all the results, fix this!
const filterProviders = (selectedSpecialties) => {
  return providers.filter((provider) =>
    provider.specialties.some((specialty) =>
      selectedSpecialties.some((sp) => sp === specialtiesCodes[specialty])
    )
  );
};

export default filterProviders;
