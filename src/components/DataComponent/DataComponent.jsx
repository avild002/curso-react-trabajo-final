import React from "react";
import { stockData } from "./data";

const DataComponent = () => {
  return (
    <>
      <div>Data:</div>
      <div>
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DataComponent




