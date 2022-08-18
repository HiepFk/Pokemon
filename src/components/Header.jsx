import React from "react";
import img from "../assets/logo_header.png";
function Header({ text, setText, setLink }) {
  // const handeSearch = (e) => {
  //   e.preventDefault();
  //   console.log(text);
  //   setLink(
  //     `https://pokemon-bpx.vercel.app/api/pokemon/?offset=0&limit=20&search=${text}`
  //   );
  // };

  return (
    <div className="app w-full flex pt-6 items-center justify-center ">
      <img src={img} alt="" className="w-1/3" />
      {/* <form action="" className="w-1/2" onSubmit={handeSearch}>
        <input
          type="text"
          className="w-full outline-0 h-12 pt-0.5 px-2 text-slate-50 bg-slate-800 rounded-md"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form> */}
    </div>
  );
}

export default Header;
