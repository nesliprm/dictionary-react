import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiURL).then(showDefinition);
  }

  function showDefinition(response) {
    console.log(response.data[0]);
    alert(response.data[0].meanings[0].definitions[0].definition);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <div className="container">
        <h1 className="title">DICTIONARY</h1>
        <form className="d-flex" onSubmit={search}>
          <input
            className="form-control"
            type="search"
            placeholder="Please type a word..."
            onChange={updateWord}
          ></input>
          <button className="btn btn-dark">Search</button>
        </form>
      </div>
    </div>
  );
}
