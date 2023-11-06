import React, { useState } from "react";
import "./pagination.css";
function Pagination({ currPage, setCurrPage, pArr, setParr }) {
  const nextPage = () => {
    let newArr = [];
    for (let i = 1; i <= pArr.length + 1; i++) {
      newArr.push(i);
    }
    setParr(newArr);
    setCurrPage(currPage + 1);
  };

  const previousPage = () => {
    if (currPage == 1) {
      return;
    } else {
      setCurrPage(currPage - 1);
    }
  };

  const pageChange = (p) => {
    if (p !== currPage) {
      setCurrPage(p);
    }
  };

  return (
    <div className="pagination">
      <span onClick={previousPage}>Prev</span>
      {pArr.map((p, i) => {
        return (
          <span
            key={i}
            className={currPage == p && "selectedPage"}
            onClick={() => pageChange(p)}
          >
            {p}
          </span>
        );
      })}
      <span onClick={nextPage}>Next</span>
    </div>
  );
}

export default Pagination;
