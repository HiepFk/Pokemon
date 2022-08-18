import React from "react";
import Stat from "./Stat";
function Stats({ stats }) {
  return (
    <div className="bg-slate-400 p-4 rounded w-full">
      <div className="grid grid-cols-6  gap-3">
        {stats.map((item, index) => {
          return <Stat key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Stats;
