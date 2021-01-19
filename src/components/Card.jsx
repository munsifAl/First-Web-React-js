import React from "react";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt="imgsrc" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button to="#" className="btn btn-outline-primary">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
