//para crear estructura, se tipió un "rafce", el archivo tiene que ser .js
import s from "./style.module.css";
import React from 'react'; //sino usamos hooks, se puede eliminar esta línea, en este caso si se puede

const DisplayDifficulty = (props) => { //usar props cuando vengan más de 4 propiedades

  const { difficulty } = props;
  console.log(props);

  return (
    <div className={s.container}>
      {props.difficulty
        ? `Difficulty set to ${difficulty}`
        : `No difficulty set`
        }
    </div>
  );
};

export default DisplayDifficulty;

