import React from "react";
import PokemonCard from "./PokemonCard";
import Button from "./Button";
function PokemonList({ pokemons, setPage, page, totalPage }) {
  return (
    <div className="app">
      <Button setPage={setPage} page={page} totalPage={totalPage} />

      <div className="grid gap-5  pb-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {pokemons.map((item, index) => {
          return <PokemonCard pokemon={item} key={index} />;
        })}
      </div>

      <Button setPage={setPage} page={page} totalPage={totalPage} />
    </div>
  );
}

export default PokemonList;
