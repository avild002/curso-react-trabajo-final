import React from "react";
import { stockData } from "./data";
import s from "./style.module.css";


const showData =()=>{
  console.log("show");
}

const DataComponent = () => {

  return (
    <>
      <div className={s.container}>
        <button onClick={showData}>Mostrar data</button>
      </div>
      <div className={s.container}>
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <table className={s.table}>
                <tr>
                  <td>{data.learning}</td> 
                </tr>
                <tr>
                  <td>{data.description}</td>
                </tr>
                <tr>
                  <td>{data.time}</td>
                </tr>
              </table>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DataComponent




