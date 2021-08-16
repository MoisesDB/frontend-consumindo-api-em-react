import React from "react";
import "../MovieRow/MovieRow.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--listarea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div className="movieRow--card">
                <div className="movieRow--info">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                    key={key}
                  />
                  <div className="movieRow--details">
                    <h2>{item.title}</h2>
                    <div className="movieRow--date">{item.release_date}</div>
                    <div className="movieRow--average">
                      {item.vote_average} pontos
                    </div>
                    <Link
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
