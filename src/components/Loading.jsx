import React from "react";
import img from "../assets/loading.gif";
function Loading() {
  return (
    <div className="app flex items-center justify-center">
      <img src={img} alt="" className="h-2/3 pt-10 pb-16" />
    </div>
  );
}

export default Loading;
