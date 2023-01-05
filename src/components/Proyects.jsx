import React from "react";
import Cards from "./Cards";
import CardsInfo from "./AppInfo/CardsInfo.js";

function Proyects() {
  return (
    <div>
      <h1>Mis Proyectos </h1>
      <p>Puedes hacer click en las imagenes para ver los proyectos</p>
      <ul>
        <li>
          {CardsInfo.map((CardInfo) => {
            return (
              <Cards
                key={CardInfo.key}
                Titulo={CardInfo.Title}
                img={CardInfo.ImgUrl}
                alt={CardInfo.alt}
                content={CardInfo.ContentEng}
                href={CardInfo.href}
              />
            );
          })}
        </li>
      </ul>
    </div>
  );
}
export default Proyects;
