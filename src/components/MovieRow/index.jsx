import React from "react";
import "../MovieRow/MovieRow.css";
import { format } from "date-fns";
import Tmdb from "../../Tmdb";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  let date = new Date();
  console.log("1: " + date);
  let date2 = JSON.stringify(date);
  console.log("2: " + JSON.parse(date2));
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
                  />
                  <div className="movieRow--details">
                    <h2>{item.title}</h2>
                    <div className="movieRow--date">{item.release_date}</div>
                    <div className="movieRow--average">
                      {item.vote_average} pontos
                    </div>
                    <div className="movieRow--check">Detalhes</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
