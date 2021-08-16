import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useParams } from "react-router-dom";
import Tmdb from "../Tmdb";
import Header from "../components/Header";
import FeaturedMovie from "../components/FeaturedMovie";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { id } = useParams();

  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let info = await Tmdb.getInfo(id);
      setMovieInfo(info);
    };

    loadAll();
  }, [id]);

  return (
    <Router>
      <div className="page">
        <Header />
        <div className="info">
          {movieInfo.map((item, key) => (
            <FeaturedMovie items={item.items} key={key} />
          ))}
        </div>
      </div>
    </Router>
  );
};
