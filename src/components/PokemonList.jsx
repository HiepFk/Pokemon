import React from "react";
import PokemonCard from "./PokemonCard";
import Button from "./Button";
function PokemonList({ pokemons, nextUrl, preUrl, setLink }) {
  return (
    <div className="app">
      <Button nextUrl={nextUrl} preUrl={preUrl} setLink={setLink} />

      <div className="grid gap-5  pb-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {pokemons.map((item, index) => {
          return <PokemonCard pokemon={item} key={index} />;
        })}
      </div>

      <Button nextUrl={nextUrl} preUrl={preUrl} setLink={setLink} />
    </div>
  );
}

export default PokemonList;
