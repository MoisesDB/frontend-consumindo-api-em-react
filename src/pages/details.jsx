import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tmdb from "../services/Tmdb";
import Header from "../components/Header";
import FeaturedMovie from "../components/FeaturedMovie";

const Details = () => {
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
    <div className="page">
      <Header />
      <div className="info">
        {movieInfo.map((item, key) => (
          <FeaturedMovie items={item.items} key={key} />
        ))}
      </div>
    </div>
  );
};

export default Details;
