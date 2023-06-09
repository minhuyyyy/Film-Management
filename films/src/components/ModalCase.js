import React from "react";

export default function ModalCase({ setShowModal, film }) {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-show">
      <div
        id="modal1"
        className="modal"
        style={{ display: "block", top: "35%" }}
      >
        <div className="modal-content">
          <h4>Video for {film.title}</h4>
          <iframe
            width="fit-content"
            height="fit-content"
            src={film.videoURL}
            title={film.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            webkit-playsinline="true"
            playsInline
            loading="lazy"
          ></iframe>
        </div>
        <div className="modal-footer">
          <a className="modal-close red-text" onClick={handleClose}>
            Close
          </a>
        </div>
      </div>
    </div>
  );
}
