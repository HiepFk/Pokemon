import React from "react";
import img from "../assets/arrow.png";
function Evolution({ evolution }) {
  const { pokemon1, pokemon2, pokemon3 } = evolution;
  console.log(evolution);
  return (
    <div className="flex flex-col justify-around items-center md:flex-row">
      <div className="flex flex-col justify-center items-center p-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon1?.url}.png`}
          alt=""
          className="w-60 rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 p-5"
        />
        <div className="text-base	font-medium capitalize mt-2">
          {pokemon1?.name}
        </div>
      </div>
      <div>
        <img src={img} alt="" className="rotate-90 w-24 md:rotate-0" />
      </div>
      <div className="flex flex-col justify-center items-center  p-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon2?.url}.png`}
          alt=""
          className="w-60 rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 p-5"
        />
        <div className="text-base	font-medium capitalize mt-2">
          {pokemon2?.name}
        </div>
      </div>
      <div>
        <img src={img} alt="" className="rotate-90 w-24 md:rotate-0" />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon3?.url}.png`}
          alt=""
          className="w-60 rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400 p-5"
        />
        <div className="text-base	font-medium capitalize mt-2">
          {pokemon3?.name}
        </div>
      </div>
    </div>
  );
}

export default Evolution;
