import React from "react";
import "./SlideShow.css";

const SlideShow = ({ data, id }) => {
  return (
    <div id={id} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="0"
          className="active carousel_btns"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          className="carousel_btns"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          className="carousel_btns"
          type="button"
          data-bs-target={`#${id}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={data.img1} className="d-block w-100" alt="img1" />
        </div>
        <div className="carousel-item">
          <img src={data.img2} className="d-block w-100" alt="img2" />
        </div>
        <div className="carousel-item">
          <img src={data.img3} className="d-block w-100" alt="img3" />
        </div>
      </div>
      <button
        className="carousel-control-prev carousel_btn"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next carousel_btn"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SlideShow;
