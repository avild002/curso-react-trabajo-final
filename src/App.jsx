import { useState } from 'react' //gestor de estados
import DisplayDifficulty from './components/DisplayDifficulty/DisplayDifficulty';
import MenuList from './components/MenuList/MenuList';
import DataComponent from './components/DataComponent/DataComponent';
import s from "./style.module.css";

function App() {
  
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const onMenuListItemClick = (difficulty) => {
    setCurrentDifficulty(difficulty)
  }

  //JXS es una mezcla entre XML + JS
  //Se inyecta componentes MenuList y DisplayDifficulty
  return (
    <>
      <div>
        <h1 style={{textAlign:"center"}}>Select your React Difficulty</h1>
        <div className={s.workspace}>
          <MenuList
            difficulty={currentDifficulty}
            onItemClick={onMenuListItemClick}
          />
          <DisplayDifficulty difficulty={currentDifficulty} />
        </div>
      </div>
      <div className={s.workspace}>
        <DataComponent/>
      </div>
    </>
  )
}

export default App
