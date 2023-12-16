import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          href="https://github.com/nesliprm/dictionary-react"
          target="_blank"
          rel="noreferrer"
          class="link-dark"
        >
          Open-source Code
        </a>{" "}
        by ▼ Nesli Parmaksizoglu
      </small>
      <br />
      <small>
        Hosted on{" "}
        <a
          href="https://gilded-lokum-c4a09c.netlify.app/"
          target="_blank"
          rel="noreferrer"
          class="link-dark"
        >
          Netlify
        </a>
        .
      </small>
    </div>
  );
}
