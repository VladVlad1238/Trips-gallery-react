import React from "react";
import './heading.css';

function Heading(props) {
  if(props.level === 'h1') {
    return (
        <h1 className="trips__heading">{props.text}</h1>
      );
  };
};

export default Heading;