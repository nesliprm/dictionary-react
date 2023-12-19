import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <small className="text-muted">{props.value.text}</small>{" "}
      <a
        href={props.value.audio}
        target="_blank"
        rel="noreferrer"
        className="link-dark link-underline-light link-underline-opacity-0 link-opacity-50-hover"
      >
        🔉
      </a>
    </div>
  );
}
