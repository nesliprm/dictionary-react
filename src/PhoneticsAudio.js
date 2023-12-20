import React from "react";
import "./PhoneticsAudio.css";

export default function PhoneticsAudio(props) {
  if (props.value.audio) {
    return (
      <span className="PhoneticsAudio">
        {" "}
        <a
          href={props.value.audio}
          target="_blank"
          rel="noreferrer"
          className="link-dark link-underline-light link-underline-opacity-0 link-opacity-50-hover"
        >
          <i class="fa-solid fa-headphones"></i>
        </a>
      </span>
    );
  } else {
    return null;
  }
}
