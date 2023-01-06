import React from "react";
import Cards from "./Cards";
import CardsInfo from "./AppInfo/CardsInfo.js";

function Proyects() {
  return (
    <div>
      <h1>My Projects </h1>
      <p>You can click on the images to visit the deployed projects.</p>
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
