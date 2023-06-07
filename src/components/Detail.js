import React, { useEffect, useState } from "react";
import { Button, Icon } from "react-materialize";
import ModalCase from "./ModalCase";
import { Link } from "react-router-dom";

export default function Detail({ film }) {
  const [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, []);

  const handleVideoButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h2 className="left-align">{film.title}</h2>
        </div>
        <div className="col s12 m9 l5">
          <img src={film.img} alt={film.title} className="film-img" />
        </div>
        {isMobile && (
          <Button
            floating
            large
            className="red video-button"
            waves="light"
            icon={<Icon>video_library</Icon>}
            onClick={handleVideoButtonClick}
          />
        )}

        <div className="col s12 m9 l7">
          <p className="left-align">
            <strong>Year:</strong> {film.year}
          </p>
          <p className="left-align">
            <strong>Director:</strong> {film.director}
          </p>
          <p className="left-align">
            <strong>Description:</strong> {film.description}
          </p>
          <iframe
            className="mobile-hide"
            width="560"
            height="300"
            src={film.videoURL}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {showModal && isMobile && <ModalCase setShowModal={setShowModal} film={film} />}
    </div>
  );
}
