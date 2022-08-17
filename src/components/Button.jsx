import React from "react";

function Button({ nextUrl, preUrl, setLink }) {
  return (
    <div className="flex items-center justify-center pb-6">
      <div
        className="bg-amber-500 flex items-center justify-center w-20 h-8	rounded ml-1 mr-1 cursor-pointer"
        onClick={() => setLink(preUrl)}
      >
        Previous
      </div>
      <div
        className="bg-amber-500 flex items-center justify-center w-20 h-8	rounded ml-1 mr-1 cursor-pointer"
        onClick={() => setLink(nextUrl)}
      >
        Next
      </div>
    </div>
  );
}

export default Button;
