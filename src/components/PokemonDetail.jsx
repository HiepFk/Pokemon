import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";
import Stats from "./Stats";
import Info from "./Info";
import axios from "axios";

function PokemonDetail() {
  const location = useLocation();
  const link = location.state;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemon = async () => {
      setLoading(true);
      const res = await axios.get(link);
      setData(res.data);
      setLoading(false);
    };
    getPokemon();
  }, [link]);
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
        <div className="w-4/5  md:w-1/2 md:mr-8  ">
          <div className="bg-stone-200 rounded flex items-center justify-center mb-4">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
              alt=""
              className="h-80"
            />
          </div>
          <Stats stats={data.stats} />
        </div>
        <div className=" bg-stone-200 p-7 rounded w-4/5  mt-4 md:w-1/2 md:mt-0">
          <Info data={data} />
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;
