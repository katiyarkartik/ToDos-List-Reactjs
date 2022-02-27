import React from "react";
import Dos from "./Dos";
function Todo(props) {
  return (
    <div className="container">
      <h3 className="text-center">todos list</h3>
      { props.td.map((t) => {
            return <Dos t={t} key={t.sno} onDelete={props.onDelete} />;
          })}
    </div>
  );
}

export default Todo;
