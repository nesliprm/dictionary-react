import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5 className="border-bottom mt-4">{props.value.partOfSpeech}</h5>

      {props.value.definitions.map(function (definition, index) {
        return (
          <div className="mb-2" key={index}>
            <div>
              <span className="fw-bold">{index + 1}. </span>
              <span>{definition.definition}</span>
            </div>
            <div>
              <em className="text-muted ms-3">{definition.example}</em>
            </div>

            <Synonyms value={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
