import React from "react";

export default function Footer(props) {
  if (props.data) {
    var networks = props.data.main.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>&copy; Copyright 2021 </li>
            <li>
              Created by{" "}
              <a
                title="Gabriela Balas"
                href="https://github.com/gabi475"
                target="_blank"
              >
                Gabriela Balas
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#header">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
