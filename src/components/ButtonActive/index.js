import React from "react";
import "./styles.css";

export default function ButtonActive(props) {
  return (
    <div
      typeof="button"
      onClick={props.click}
      id="btn-active"
      className={props.class}
    >
      <p className="text-resp">{props.perg}</p>
      <div id="icons">{props.icon}</div>
    </div>
  );
}
