import React from "react";

function ContactMe() {
  return (
    <div className="contactBox">
      <h3>Contacta con migo a travez de: </h3>
      <div className="contactForm">
        <button type="button" className="buttonContact">
          <a className="mail" href="mailto:kofikwafoawua@gmail.com">
            Envia un email
          </a>
        </button>
      </div>
    </div>
  );
}
export default ContactMe;
