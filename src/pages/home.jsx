import React, { useEffect, useState } from "react";
import Tmdb from "../services/Tmdb";
import MovieRow from "../components/MovieRow";
import Header from "../components/Header";

const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [headerFade, setHeaderFade] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getList();
      list[0].items.results.sort((a, b) => b.vote_average - a.vote_average);
      setMovieList(list.sort((a, b) => b.vote_average - a.vote_average));
    };

    loadAll();
  }, []);

  const handleBtnSearch = () => {
    const loadSearched = async () => {
      let list = await Tmdb.getResult(searchedValue);
      if (searchedValue.length >= 1) {
        setMovieList(list);
      }
    };

    let searchedValue = document.getElementById("searchedValue").value;
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
          <MovieRow title={item.title} key={key} items={item.items} />
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

export default Home;
