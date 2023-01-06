import React from "react";

function Greetings() {
  return (
    <div className="Greetings">
      <h1>Welcome to my Portfolio </h1>
      <p>Here you can find some of my projects and personal information!</p>

      <h4>I`m Fullstack web developer.</h4>

      <p>On the Frontend i focus on Javascript and React technologies.</p>
      <p>
        And in the Backend I use Node.js, Express.js, EJS, Motoko, C#, .Net
        technologies.
      </p>

      <img
        src="https://kkwafo.github.io/My-css-personal-site/images/cvphoto.png"
        alt="Cv"
      ></img>

      <p className="pG">My name is Kofi Kwafo Awua. It's a pleasure!</p>
      <h4>
        {" "}
        Also im the founder of{" "}
        <a href="https://www.instagram.com/drylivingfood.cba/">Drylivingfood</a>
        .{" "}
      </h4>
      <p>What is DrylivingFood ? </p>
      <p>
        Drylivingfood is my business that I started during the pandemic. At the
        beginning of 2020, and we are dedicated to health and healthy food. We
        focus on awareness of environmental problems. We support ourselves with
        the preparation of dehydrated fruit snacks, on the process we controlled
        humidity to maintain all the properties of the food.
      </p>

      <p>
        But we are here to show my projects related to development of web
        applications!
      </p>
    </div>
  );
}
export default Greetings;
