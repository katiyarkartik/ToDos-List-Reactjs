import React from "react";
import Todo from "./Todo";
import "./Dos.css";
function dos({ t, onDelete }) {
  function complete() {}
  return (
    <div className="content">
      <p>{t.title}</p>
      <p>{t.desc}</p>
      <div className="comp">
        <button
          className="btn btn-sm btn-danger bttn"
          onClick={() => {
            onDelete(t);
          }}
        >
          Delete
        </button>

        <button className="btn btn-sm btn-success bttn" onClick={complete()}>
          Completed
        </button>
      </div>
    </div>
  );
}

export default dos;
