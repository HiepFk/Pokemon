import React from "react";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  const icons = [
    { id: 1, icon: <FaFacebook />, url: "https://www.facebook.com/hiepfk.128" },
    { id: 2, icon: <FaInstagram />, url: "https://www.instagram.com/hiep.fk" },
    { id: 3, icon: <FaGithub />, url: "https://github.com/HiepFk" },
  ];
  return (
    <div className="bg-slate-900 h-16 z-20 flex items-center">
      <div className="app flex items-center w-full justify-between text-slate-300	">
        <div className="text-sm font-semibold">
          {" "}
          &copy;{new Date().getFullYear()}
          <span> HiepFK. All Rights Reserved</span>
        </div>
        <div className="flex items-center">
          {icons.map((item) => {
            return (
              <a href={item.url} key={item.id} className="text-lg  ml-6">
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
