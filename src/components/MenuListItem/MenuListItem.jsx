import React, { useState } from "react";
import s from "./style.module.css";

const MenuListItem = (props) => {
  const [isHovered, setIsHover] = useState(false);

  const activate = () => {
    setIsHover(true);
  };

  const deactivate = () => {
    setIsHover(false);
  };

  const getBackgroundColor = () => {
    if (isHovered) {
      return "#a5e9ff"
    } else {
      if (props.isSelected) {
        return "#26baea"
      } else {
        return "#eff0ef"
      }
    }
  };

  const onItemClick = () => {
    props.onClick(props.difficulty); {/*no entiendo si es una asignación y después como sigue el flujo*/}
    console.log(props.onClick)
    //console.log("props.difficulty: "+props.difficulty);
  };

  return (
    <div className={s.container}
      onClick={onItemClick}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      style={{ backgroundColor: getBackgroundColor() }}
    >
      Set to: {props.difficulty} {/*toma los valores de la constante maps del archivo constant.js que se le pasó desde MenuList*/}
    </div>
  )
}

export default MenuListItem