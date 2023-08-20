import React from "react";
import './tripcard.css';
import capacityImg from "../../assets/double.jpg";


function TripCard(props) {
  console.log(props)
  return (
    <div className="card__container">
      <div className="lables__container">
        <div className="transport__lable-container">
          <p className="transport__lable-text">{props.transportLable}</p>
        </div>
        { props.capacityLableImg  && (
            <div className="capacity__lable-container">{props.capacityLable} 
            <img className="capacity__img" src={capacityImg} alt={props.city} />
            </div>
        ) }
      </div>
      <img src={props.image} alt={props.city} />
      <div className="description__card-container">
        <p className="description__text">{props.city}, {props.month} - {props.price}</p>
      </div>
    </div>
  );
};

export default TripCard