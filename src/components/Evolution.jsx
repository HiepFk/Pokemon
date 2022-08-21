import React from "react";
import { Link } from "react-router-dom";

import img from "../assets/arrow.png";
function Evolution({ evolution }) {
  const { pokemon1, pokemon2, pokemon3 } = evolution;
  return (
    <div className="flex flex-col justify-around items-center md:flex-row">
      <div className="flex flex-col justify-center items-center p-4 ">
        <div className="rounded-full w-40  shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400">
          <Link to={`/${pokemon1?.name}`}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon1?.url}.png`}
              alt=""
              className="p-4"
            />
          </Link>
        </div>
        <div className="text-base	font-medium capitalize mt-2">
          {pokemon1?.name}
        </div>
      </div>
      {pokemon2?.length > 0 && (
        <>
          <div>
            <img src={img} alt="" className="rotate-90 w-24 md:rotate-0" />
          </div>
          <div
            className={
              pokemon3?.length < 3 && pokemon2?.length < 4
                ? "grid"
                : "grid md:grid-cols-2"
            }
          >
            {pokemon2.map((item) => {
              return (
                <div
                  className="flex flex-col justify-center items-center  p-4"
                  key={item?.url}
                >
                  <div className="w-40 rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400">
                    <Link to={`/${item.name}`}>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item?.url}.png`}
                        alt=""
                        className="p-4"
                      />
                    </Link>
                  </div>
                  <div className="text-base	font-medium capitalize mt-2">
                    {item?.name}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {pokemon3?.length > 0 && (
        <>
          <div>
            <img src={img} alt="" className="rotate-90 w-24 md:rotate-0" />
          </div>
          <div className="grid">
            {pokemon3.map((item) => {
              return (
                <div
                  className="flex flex-col justify-center items-center p-4 "
                  key={item?.url}
                >
                  <div className="w-40 rounded-full shadow-xl cursor-pointer bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-green-500 hover:to-yellow-400">
                    <Link to={`/${item?.name}`}>
                      <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item?.url}.png`}
                        alt=""
                        className="p-4"
                      />
                    </Link>
                  </div>
                  <div className="text-base	font-medium capitalize mt-2">
                    {item?.name}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Evolution;
