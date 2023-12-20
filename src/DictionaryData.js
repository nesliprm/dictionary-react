import React from "react";
import Meaning from "./Meaning";
import PhoneticsAudio from "./PhoneticsAudio";
import PhoneticsText from "./PhoneticsText";
import "./DictionaryData.css";

export default function DictionaryData(props) {
  if (props.value) {
    return (
      <div className="DictionaryData">
        <h2>{props.value.word}</h2>
        <div className="mb-4">
          {props.value.phonetics.map(function (phonetic, index) {
            return (
              <div>
                <span key={index}>
                  <PhoneticsText value={phonetic} />
                </span>
                <span key={index}>
                  <PhoneticsAudio value={phonetic} />
                </span>
              </div>
            );
          })}
        </div>

        {props.value.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning value={meaning} />
            </div>
          );
        })}

        <h5 className="mt-5 border-bottom">photos of "{props.value.word}"</h5>
      </div>
    );
  } else {
    return null;
  }
}
