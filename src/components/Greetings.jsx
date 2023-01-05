import React from "react";

function Greetings() {
  return (
    <div className="Greetings">
      <h1>Bienvenido a mi Portfolio </h1>
      <p>
        Aqui podras encontrar algunos de mis proyectos e informarcion personal a
        cerca de mi.
      </p>

      <h4>
        Soy Fullstack web developer en JavaScript y React . Tambien soy el
        creador de{" "}
        <a href="https://www.instagram.com/drylivingfood.cba/">Drylivingfood</a>
        .{" "}
      </h4>
      <p>¿Que es DrylivingFood ? </p>
      <p>
        Drylivingfood mi emprendimiento que lo inicie durante la pandemia
        durante el año 2020 esta dedicado a la salud y alimentacion. Con foco a
        la concientizacion del medio ambiente y sus problematicas. Y nos
        sustentamos elaborando snacks frutales deshidratados, con procedimientos
        controlados de humedad para mantener todas las propiedades del alimento
      </p>

      <p>
        Pero estamos aqui para mostrar mis proyectos relaciones al desarrollo de
        aplicaciones Web!
      </p>
      <p>En Frontend uso las tecnologias de React.js y Next.js</p>
      <p>En Backend uso Node.js, Express.js, EJS, Motoko, C#, .Net</p>

      <img
        src="https://kkwafo.github.io/My-css-personal-site/images/cvphoto.png"
        alt="Cv"
      ></img>

      <p className="pG">My nombre es Kofi Kwafo Awua, un gusto conocerlos!</p>
    </div>
  );
}
export default Greetings;
