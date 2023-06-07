import React from "react";
import { Link } from "react-router-dom";
export default function FilmsPresentation({ films }) {
  return (
    <div className="container-fluid films-container">
      <div className="row">
        {films.map((film) => (
          <div key={film.id} className="col s12 m6 l3">
            <div className="card">
              <div className="card-image">
                <img className="film-img" src={film.img} alt={film.title} />
              </div>
              <div className="card-content center-align">
                <span className="card-title">{film.title}</span>
                <span>{film.year}</span>
                <p>{film.director}</p>
                <div className="center-align detail">
                  <Link
                    to={`/detail/${film.id}`}
                    className="btn waves-effect waves-light"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
