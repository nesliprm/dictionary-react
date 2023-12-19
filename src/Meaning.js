import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5 className="border-bottom">{props.value.partOfSpeech}</h5>

      {props.value.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>⇢ {definition.definition}</p>
            <p>
              <em className="text-muted">{definition.example}</em>
            </p>
            <Synonyms value={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
