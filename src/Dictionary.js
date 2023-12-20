import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import DictionaryData from "./DictionaryData";
import Footer from "./Footer";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [data, setData] = useState(null);
  let [photo, setPhoto] = useState(null);

  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiURL).then(showDefinition);
    let photoApiKey = "040oaf210f6td0bbf39be33790d96a71";
    let photoApiURL = `https://api.shecodes.io/images/v1/search?query=${word}&key=${photoApiKey}`;
    axios.get(photoApiURL).then(showPhotos);
  }

  function showDefinition(response) {
    setData(response.data[0]);
  }

  function showPhotos(response) {
    console.log(response.data);
    setPhoto(response.data.photos);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <header>
        <h1>dictionary</h1>
        <h6 className="title mb-3">Which word are we searching today?</h6>
        <form className="input-group" onSubmit={search}>
          <input
            className="form-control rounded-start-5"
            type="search"
            placeholder="Please type a word..."
            onChange={updateWord}
          ></input>

          <button
            class="input-group-append bg-dark border-dark btn rounded-end-5"
            type="search"
          >
            <i class="fa fa-search"></i>
          </button>
        </form>
      </header>

      <div className="container">
        <DictionaryData value={data} />

        <Photos value={photo} />
      </div>
      <div className="mt-5 mb-3">
        <Footer />
      </div>
    </div>
  );
}
