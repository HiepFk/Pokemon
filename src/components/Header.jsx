import React from "react";
import { useNavigate, Link } from "react-router-dom";
import img from "../assets/logo_header.png";
function Header({ text, setText }) {
  const navigate = useNavigate();
  const handeSearch = (e) => {
    e.preventDefault();
    navigate(`/${text}`);
    setText("");
  };

  return (
    <div className="app w-full flex flex-col pt-6 pb-2 items-center justify-center md:justify-between md:flex-row ">
      <Link to={"/"} className="w-1/3 mb-4 md:mb-0">
        <img src={img} alt="" className="w-full" />
      </Link>
      <form action="" className="w-2/3 md:w-1/3" onSubmit={handeSearch}>
        <input
          type="text"
          className="w-full outline-0 h-12 pt-0.5 px-2 text-slate-50 bg-slate-800 rounded-md"
          value={text}
          onChange={(e) => {
            setText(e.target.value.toLowerCase());
          }}
        />
      </form>
    </div>
  );
}

export default Header;
