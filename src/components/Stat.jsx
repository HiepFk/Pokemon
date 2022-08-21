import React from "react";

function Stat({ item }) {
  let col = 0;
  if (item?.base_stat >= 200) {
    col = 10;
  } else {
    col = Math.floor(item?.base_stat / 20);
  }

  return (
    <div>
      {Array.from(new Array(10 - col)).map((_, index) => {
        return <div className="mb-1 h-2 bg-slate-100" key={index} />;
      })}
      {Array.from(new Array(col)).map((_, index) => {
        return <div className={`mb-1 h-2 ${item?.stat?.name}`} key={index} />;
      })}
      <div className="text-center  capitalize font-medium text-sm">
        {item?.stat?.name}
      </div>
    </div>
  );
}

export default Stat;
