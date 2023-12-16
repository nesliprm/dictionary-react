import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          href="https://github.com/nesliprm/cocktail-generator"
          target="_blank"
          class="link-dark"
        >
          Open-source Code
        </a>{" "}
        by ▼ Nesli Parmaksizoglu
      </small>
      <div>
        <small>
          Hosted on{" "}
          <a
            href="https://gilded-lokum-c4a09c.netlify.app/"
            target="_blank"
            class="link-dark"
          >
            Netlify
          </a>
          .
        </small>
      </div>
    </div>
  );
}
