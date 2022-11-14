import React from "react";
import "./Card.scss";
import { ReactComponent as Star } from "../asset/Star.svg";

function Card(props) {
  return (
    <div className="card">
      <div className="card-details">
        <div className="card-img" style={{ padding: "1rem" }}>
          <img src={props.img} alt="metaverse " />
        </div>
        <div className="text-grid">
          <p className="name">Desert King</p>
          <p className="price">1MBT per night</p>
          <p className="distance">2345km away</p>
          <p className="time-frame">available for 2weeks stay</p>
          <span className="rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
