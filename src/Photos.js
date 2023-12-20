import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.value) {
    return (
      <div className="Photos">
        {props.value.map(function (photo, index) {
          return (
            <div className="container">
              <a href={photo.url} target="_blank" rel="noreferrer">
                <img
                  key={index}
                  src={photo.src.landscape}
                  alt={photo.alt}
                  width="300px"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
