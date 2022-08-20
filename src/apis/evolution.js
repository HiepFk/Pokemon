import axios from "axios";
const deleteUrl = "https://pokeapi.co/api/v2/pokemon-species/";
export const getEvolution = async (url) => {
  let pokemon1 = { name: "", url: "" };
  let pokemon2 = { name: "", url: "" };
  let pokemon3 = { name: "", url: "" };
  let dataEvolution = {};
  const res = await axios.get(url);
  dataEvolution = res.data;
  if (dataEvolution?.chain?.species) {
    pokemon1.name = dataEvolution?.chain?.species?.name;
    pokemon1.url = dataEvolution?.chain?.species?.url
      ?.replace(deleteUrl, "")
      .replace("/", "");
  }
  if (dataEvolution?.chain?.evolves_to?.[0]?.species) {
    pokemon2.name = dataEvolution?.chain?.evolves_to?.[0]?.species?.name;
    pokemon2.url = dataEvolution?.chain?.evolves_to?.[0]?.species?.url
      ?.replace(deleteUrl, "")
      .replace("/", "");

    if (dataEvolution?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.url) {
      pokemon3.name =
        dataEvolution?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.name;
      pokemon3.url =
        dataEvolution?.chain?.evolves_to?.[0]?.evolves_to?.[0]?.species?.url
          ?.replace(deleteUrl, "")
          .replace("/", "");
    }
  }
  return { pokemon1, pokemon2, pokemon3 };
};
