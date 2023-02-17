import React, { useState } from "react";
import { learnings } from "./data";
import s from "./style.module.css";

const NewComponent = ({todos, addTodo}) => {

  console.log("child render");

  return (
    <>
      <div>
        <h2>My Learnings</h2>
        {learnings.map((data, key) => {
          return (
            <div key={key}>           
              {data.learning}, {data.description}, {data.time}
            </div>
          );
        })}
      </div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, key) => {
          return <p key={key}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
    </>
  );
};

export default NewComponent




