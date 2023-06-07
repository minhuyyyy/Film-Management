import React from "react";
import { Link } from "react-router-dom";
import { Films } from "./ListOfFilms";

export default function NewsPage() {
  return (
    <div className="container">
      <h2>Latest Film News</h2>
      {Films.map((film) => (
        <div key={film.id} className="news-article">
          <img src={film.img} alt={film.title} className="article-image" />
          <div className="article-details">
            <h3>{film.title}</h3>
            <p>
              <strong>Year:</strong> {film.year}
            </p>
            <p>
              <strong>Director:</strong> {film.director}
            </p>
            <p>{film.description}</p>
            <Link to={`/detail/${film.id}`} className="read-more-link">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
