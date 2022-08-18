import React from "react";

function Button({ nextUrl, preUrl, setLink }) {
  return (
    <div className="flex items-center justify-center pb-6 pt-4">
      <div
        className={preUrl === null ? "btn" : "btn_active"}
        onClick={() => setLink(preUrl)}
      >
        Previous
      </div>
      <div
        className={nextUrl === null ? "btn" : "btn_active"}
        onClick={() => setLink(nextUrl)}
      >
        Next
      </div>
    </div>
  );
}

export default Button;
