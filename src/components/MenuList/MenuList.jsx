import MenuListItem from "../MenuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";
import s from "./style.module.css";

const MenuList = (props) => {
  //console.log(props);
  return (
    <>
    <div className={s.container}>
      {DIFFICULTIES.map((difficulty, idx) => ( //difficulty toma los valores del map
        <MenuListItem
          key={idx}
          isSelected={props.difficulty === difficulty} //props.difficulty toma el valor que se le esta pasando al componente
          onClick={props.onItemClick}
          difficulty={difficulty}
        />
      ))}
    </div>
    </>
  );
};

export default MenuList;