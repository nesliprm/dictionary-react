import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`searching ${word}`);
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
