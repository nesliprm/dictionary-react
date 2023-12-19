import React from "react";

export default function Photos(props) {
  console.log(props.value);
  if (props.value) {
    return (
      <div className="Photos">
        {props.value.map(function (photo, index) {
          return (
            <a href={photo.url} target="_blank" rel="noreferrer">
              <img
                key={index}
                src={photo.src.landscape}
                alt={photo.alt}
                width="300px"
              />
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
