import React from "react";
import IconsInfo from "./AppInfo/iconInfo.js";
import Icon from "./Icon";

function MyKnows() {
  return (
    <div>
      <h3 className="KnowsTitle">
        Conocimientos en las siguientes tecnologias
      </h3>
      <div>
        <ul>
          <li className="Icons">
            {IconsInfo.map((IconInfo) => {
              return (
                <Icon
                  key={IconInfo.key}
                  Title={IconInfo.Title}
                  img={IconInfo.ImgUrl}
                />
              );
            })}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default MyKnows;
