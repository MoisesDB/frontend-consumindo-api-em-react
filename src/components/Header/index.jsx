import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ fade, handleBtnSearch }) => {
  return (
    <header className={fade ? "headerFade" : ""}>
      <div className="header--logo">
        <a href="http://localhost:3000/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt="TMDB"
          />
        </a>
      </div>
      <div className="header--searchField">
        <input type="text" placeholder="Pesquisar" id="searchedValue" />
        <div className="header--searchButton" onClick={handleBtnSearch}>
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};
