import providers from "../providers_with_specialties.json";
import specialtiesCodes from "../specialties.json";

const filterProviders = (specialty) => {
  return providers.filter((provider) =>
    provider.specialties.some((sp) => specialtiesCodes[sp] === specialty[0])
  );
};

export default filterProviders;
