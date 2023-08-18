import React from "react";
import './tripcard.css';


function TripCard(props) {
  console.log(props)
  return (
    <div className="card__container">
      <div className="transport__lable-container">
        <p className="transport__lable-text">{props.transportLable}</p>
      </div>
      <div>{ props.capacityLable >= 0 && (
          <div>{props.capacityLable} <img src={props.capacityLableImg} alt="" /> </div>
      ) }</div>
      <img src={props.image} alt={props.city} />
      <div className="description__card-container">
        <p className="description__text">{props.city}, {props.month} - {props.price}</p>
      </div>
    </div>
  );
};

export default TripCard