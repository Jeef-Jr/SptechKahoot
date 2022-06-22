import React from "react";
import "./styles.css";
export const Button = (props) => {
  return (
    <a href="/jogar">
      <div id="btn">
        <p>{props.name}</p>
      </div>
    </a>
  );
};
