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
          href="https://dainty-seahorse-95b443.netlify.app"
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
