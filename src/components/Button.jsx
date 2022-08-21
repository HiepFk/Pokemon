import React from "react";

function Button({ setPage, page, totalPage }) {
  const prePage = () => {
    setPage(page - 1);
  };
  const nextPage = () => {
    setPage(page + 1);
  };
  return (
    <div className="flex items-center justify-center pb-6 pt-4">
      <div onClick={prePage} className={page <= 1 ? "btn" : "btn_active"}>
        Previous
      </div>

      <div className="mr-4 ml-4 text-slate-50">
        {page} / {totalPage}
      </div>

      <div
        className={page >= totalPage ? "btn" : "btn_active"}
        onClick={nextPage}
      >
        Next
      </div>
    </div>
  );
}

export default Button;
