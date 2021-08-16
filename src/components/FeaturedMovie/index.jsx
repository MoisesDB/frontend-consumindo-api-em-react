import React from "react";
import "./FeaturedMovie.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ items }) => {
  let firstDate = new Date(items.release_date);

  return (
    <div className="movieInfo">
      <div
        className="movieInfo--area"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${items.backdrop_path})`,
        }}
      >
        <div className="movieInfo--vertical">
          <div className="movieInfo--horizontal">
            <h2 className="movieInfo--name">{items.title}</h2>
            <div className="movieInfo--descField">
              <div className="movieInfo--temps">{items.runtime} min</div>
              <div className="movieInfo--year">{firstDate.getFullYear()}</div>
              <div className="movieInfo--average">{items.vote_average}</div>
            </div>
            <div className="movieInfo--description">{items.overview}</div>
            <div className="movieInfo--genres">
              Gêneros:
              {items.genres.map((gen, key) => (
                <div key={key}>{gen.name}, </div>
              ))}
            </div>
            <div className="movieInfo--languages">
              Idiomas:{" "}
              {items.spoken_languages.map((lan, key) => (
                <div key={key}>{lan.name},</div>
              ))}
            </div>
            <div className="movieInfo--button">
              <PlayArrowIcon /> Reproduzir
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
