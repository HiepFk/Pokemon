import React from "react";

function Info({ data }) {
  return (
    <div className=" capitalize	">
      <div className="text-lg">
        <div className="flex items-center mb-2 text-2xl">
          <div className=" font-medium mr-2">Name:</div>
          <span>{data.name}</span>
        </div>
        <div className=" font-medium ">Description:</div>
        <span>
          A strange seed was planted on its back at birth.The plant sprouts and
          grows with this POKéMON.
        </span>
      </div>
      <div className="flex items-center mt-2 text-lg">
        <div className=" font-medium mr-2">Height:</div>
        <span>{data.height / 10} m</span>
      </div>
      <div className="flex items-center mt-2 text-lg ">
        <div className=" font-medium mr-2 ">Weight:</div>
        <span> {data.weight / 10} kg</span>
      </div>
      <div className=" mt-2 text-lg">
        <div className=" font-medium mb-1 ">Abilities:</div>
        <div className="flex">
          {data.abilities?.map((item) => {
            return (
              <div
                key={item?.slot}
                className="mr-4 bg-green-300 px-2 py-1 rounded text-sm"
              >
                {item?.ability?.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-2 text-lg">
        <div className=" font-medium mb-1">Type:</div>
        <div className="flex">
          {data.types?.map((item) => {
            return (
              <div
                key={item?.slot}
                className="mr-4 bg-green-300 px-2 py-1 rounded text-sm"
              >
                {item?.type?.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Info;
