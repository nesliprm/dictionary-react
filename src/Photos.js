import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.value) {
    return (
      <div className="Photos container">
        <div className="photos-grid">
          {" "}
          {props.value.map(function (photo, index) {
            return (
              <div key={index}>
                <a href={photo.url} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    width="300px"
                    className="img-fluid rounded"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
