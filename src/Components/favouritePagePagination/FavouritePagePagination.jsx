import React from 'react'
import "./favouritePagePagination.css"
function FavouritePagePagination({
  moviesPerPage,
  searchText,
  favCurrPage,
  setFavCurrPage,
  numOfPage,
}) {


  const PArr = [];
  for (let i = 1; i <= numOfPage; i++) {
    PArr.push(i);
  }

  return (
    <div className="favPagination">
      {PArr.length > 0 &&
        PArr.map((p) => {
          return (
            <span
              onClick={() => setFavCurrPage(p)}
              className={p == favCurrPage && "favSelected"}
            >
              {p}
            </span>
          );
        })}
    </div>
  );
}

export default FavouritePagePagination