import React from "react";

function ContactMe() {
  return (
    <div className="contactBox">
      <h3>Contact me through Email, Github or Linkedin</h3>
      <div className="contactForm">
        <button type="button" className="buttonContact">
          <a className="mail" href="mailto:kofikwafoawua@gmail.com">
            Send email
          </a>
        </button>
      </div>
    </div>
  );
}
export default ContactMe;
