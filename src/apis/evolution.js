import axios from "axios";
const deleteUrl = "https://pokeapi.co/api/v2/pokemon-species/";
export const getEvolution = async (url) => {
  let pokemon1 = { name: "", url: "" };
  let pokemon2 = [];
  let pokemon3 = [];
  let dataEvolution = {};
  const res = await axios.get(url);
  dataEvolution = res.data;
  if (dataEvolution?.chain?.species) {
    pokemon1.name = dataEvolution?.chain?.species?.name;
    pokemon1.url = dataEvolution?.chain?.species?.url
      ?.replace(deleteUrl, "")
      .replace("/", "");
  }
  if (dataEvolution?.chain?.evolves_to?.length > 0) {
    for (const elm of dataEvolution.chain.evolves_to) {
      const pokemon = { name: "", url: "" };
      pokemon.name = elm.species?.name;
      pokemon.url = elm.species?.url?.replace(deleteUrl, "").replace("/", "");
      pokemon2.push(pokemon);
    }
    if (dataEvolution.chain.evolves_to[0].evolves_to.length > 0) {
      for (const elmList of dataEvolution.chain.evolves_to) {
        for (const elm of elmList.evolves_to) {
          const pokemon = { name: "", url: "" };
          pokemon.name = elm.species?.name;
          pokemon.url = elm.species?.url
            ?.replace(deleteUrl, "")
            .replace("/", "");
          pokemon3.push(pokemon);
        }
      }
    }
  }
  return { pokemon1, pokemon2, pokemon3 };
};
