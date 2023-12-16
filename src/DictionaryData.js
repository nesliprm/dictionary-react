import React from "react";
import Meaning from "./Meaning";
import "./DictionaryData.css";

export default function DictionaryData(props) {
  console.log(props.value);
  if (props.value) {
    return (
      <div className="DictionaryData">
        <h2>{props.value.word}</h2>
        <br />
        {props.value.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning value={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
