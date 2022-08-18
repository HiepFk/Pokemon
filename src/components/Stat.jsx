import React from "react";

function Stat({ item }) {
  const col = Math.floor(item?.base_stat / 20);
  return (
    <div>
      {Array.from(new Array(10 - col)).map((_, index) => {
        return <div className="mb-1 h-2 bg-slate-100" key={index} />;
      })}
      {Array.from(new Array(col)).map((_, index) => {
        console.log(item?.stat?.name);
        return <div className={`mb-1 h-2 ${item?.stat?.name}`} key={index} />;
      })}
      <div className="text-center text-sm capitalize font-medium">
        {item?.stat?.name}
      </div>
    </div>
  );
}

export default Stat;
