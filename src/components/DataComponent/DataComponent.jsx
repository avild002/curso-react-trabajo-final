import React, { useState } from "react";
import { stockData } from "./data";
import s from "./style.module.css";


const showData =()=>{
  console.log("show");
}

const DataComponent = () => {

  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div className={s.container}>
        <button onClick={() => setHidden(s => !s)}>Mostrar data</button>
      </div>
      {!hidden ? 
      <div>
        {stockData.map((data, key) => {
          return (
            <div key={key}>           
              <table className={s.table}>
              <tbody>
                <tr>
                  <td>{data.learning}</td> 
                </tr>
                <tr>
                  <td>{data.description}</td>
                </tr>
                <tr>
                  <td>{data.time}</td>
                </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>: null}
    </>
  );
};

export default DataComponent




