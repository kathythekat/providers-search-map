import providers from "../providers_with_specialties.json";
import specialtiesCodes from "../specialties.json";

/**
 *
 * @param {selectedSpecialties}
 * @returns filtered providers that match specialties
 * [{id, name, logo, ...specialties:[]}]
 */

const filterProviders = (selectedSpecialties) => {
  return providers.filter((provider) =>
    provider.specialties.some((specialty) =>
      selectedSpecialties.some((sp) => sp === specialtiesCodes[specialty])
    )
  );
};

export default filterProviders;
