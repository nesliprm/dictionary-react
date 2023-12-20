import React from "react";

export default function Synonyms(props) {
  if (props.value) {
    return (
      <div className="Synonyms">
        {props.value.map(function (synonym, index) {
          return <span key={index}>• {synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
