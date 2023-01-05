import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Kofi Kwafo Awua {year}</p>
      <div>
        <a href="https://github.com/Kkwafo">
          <img
            className="iconImg"
            src="https://www.kindpng.com/picc/m/694-6943896_github-logo-png-github-icon-png-transparent-png.png"
            alt="github icon"
          />
        </a>

        <a href="https://www.linkedin.com/in/kofi-kwafo-awua-3b4350151/">
          <img
            className="iconImg"
            src="https://brand.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
            alt="Linkedin icon"
          />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
