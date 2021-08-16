import React from "react";
import "../MovieRow/MovieRow.css";
import { Link } from "react-router-dom";

import { format, parseISO } from "date-fns";

const MovieRow = ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieRow--card" key={key}>
                <div className="movieRow--info">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                    key={item.poster_path}
                  />
                  <div className="movieRow--details">
                    <h2 key={key}>{item.title}</h2>
                    <div className="movieRow--date" key={item.release_date}>
                      {item.release_date
                        ? format(parseISO(item.release_date), "MMMM d yyyy")
                        : null}
                    </div>
                    <div className="movieRow--average" key={item.vote_average}>
                      {item.vote_average} pontos
                    </div>
                    <Link
                      key={item.id}
                      to={`/details/${item.id}`}
                      className="movieRow--check"
                    >
                      Detalhes
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieRow;
