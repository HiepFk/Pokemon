import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function PokemonCard({ pokemon }) {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [types, setType] = useState([""]);
  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(pokemon.url);
      setName(res.data?.name);
      setId(res.data?.id);
      setType(res.data?.types);
    };
    getPokemon();
  }, [pokemon.url]);
  return (
    <Link
      to={`/${name}`}
      state={pokemon.url}
      className="p-4 rounded-lg shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 "
    >
      <div className="flex items-center	justify-between w-full font-semibold capitalize text-lg">
        <h1>{name}</h1>
        <p className="flex justify-center items-center rounded-full border w-11 h-11 shadow-md shadow-gray-100">
          #{id}
        </p>
      </div>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt=""
        className="hover:scale-110 transition ease-in-out delay-200"
      />

      <div className="flex items-center justify-center">
        {types.map((type) => {
          return (
            <div
              key={type.slot}
              className="capitalize px-2 py-1 bg-sky-400 mr-1 ml-1 rounded-lg font-normal"
            >
              {type?.type?.name}
            </div>
          );
        })}
      </div>
    </Link>
  );
}

export default PokemonCard;
