import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Loading from "./Loading";
import Stats from "./Stats";
import Info from "./Info";
import Evolution from "./Evolution";
import { getEvolution } from "../apis/evolution";

function PokemonDetail() {
  const { name } = useParams();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [evolution, setEvolution] = useState({});

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setData(res.data);
      setLoading(false);
    };
    getPokemon();
  }, [name]);

  useEffect(() => {
    if (data?.species?.url) {
      const getLink = async () => {
        const res = await axios.get(data?.species?.url);
        setEvolution(await getEvolution(res.data?.evolution_chain?.url));
      };
      getLink();
    }
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app flex items-center pb-6 flex-col">
      <div className="mb-1">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${data.id}.gif`}
          alt=""
          className="w-16"
        />
      </div>
      <div className="flex items-center flex-col md:flex-row md:items-stretch ">
        <div className="w-5/6  md:w-1/2 md:mr-8  ">
          <div className="bg-stone-200 rounded flex items-center justify-center mb-4">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt=""
              className="h-80"
            />
          </div>
          <Stats stats={data.stats} />
        </div>
        <div className=" bg-stone-200 p-7 rounded w-5/6  mt-4 md:w-1/2 md:mt-0">
          <Info data={data} />
        </div>
      </div>
      <div className="w-5/6 bg-stone-200 rounded mt-4 md:w-full">
        <Evolution evolution={evolution} />
      </div>
    </div>
  );
}

export default PokemonDetail;
