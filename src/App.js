import React, { useEffect, useState } from "react";
import "./App.css";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import Header from "./components/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [headerFade, setHeaderFade] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getList();
      setMovieList(list);
      console.log(list);
    };
    loadAll();
  }, []);

  const handleBtnSearch = () => {
    const loadSearched = async () => {
      let list = await Tmdb.getResult(searchedValue);
      if (searchedValue.length >= 1) {
        setMovieList(list);
        console.log(list);
      } else {
        return;
      }
    };

    let searchedValue = document.getElementById("searchedValue").value;
    console.log(searchedValue);
    loadSearched();
  };

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHeaderFade(true);
      } else {
        setHeaderFade(false);
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header fade={headerFade} handleBtnSearch={handleBtnSearch} />
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow title={item.title} key={item.key} items={item.items} />
        ))}
      </section>
      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://www.listasdeempresas.com.br/images/loader.gif"
            alt="logo"
          ></img>
        </div>
      )}
    </div>
  );
};
