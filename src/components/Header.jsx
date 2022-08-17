import React from "react";
import img from "../assets/logo_header.png";
function Header() {
  return (
    <div className="app w-full flex pt-6 items-center justify-between ">
      <img src={img} alt="" className="w-56" />
      <form action="" className="w-1/2">
        <input
          type="text"
          className="w-full outline-0 h-12 pt-0.5 px-2 text-slate-50 bg-slate-800 rounded-md"
        />
      </form>
    </div>
  );
}

export default Header;
