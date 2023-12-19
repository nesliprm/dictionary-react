import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./DictionaryData.css";

export default function DictionaryData(props) {
  console.log(props.value);
  if (props.value) {
    return (
      <div className="DictionaryData">
        <h2>{props.value.word}</h2>
        {props.value.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Phonetics value={phonetic} />
            </div>
          );
        })}
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
