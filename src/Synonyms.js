import React from "react";

export default function Synonyms(props) {
  if (props.value) {
    return (
      <div className="text-muted ms-3 Synonyms">
        {props.value.map(function (synonym, index) {
          return (
            <span key={index}>
              <small>- {synonym} </small>
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
