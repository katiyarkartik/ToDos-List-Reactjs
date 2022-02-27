import "./App.css";
import Header from "./Header";
import Todo from "./Todo";
import Footer from "./Footer";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import "./Dos.css";

function App() {
  const onDelete = (t) => {
    console.log("iam onDelete", t);
    setTodos(
      todos.filter((e) => {
        return e !== t;
      })
    );
  };

  const addTodo = (title, desc) => {
    console.log("add", title, desc);

    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <Header title="My list" />

      <div className="items">
        <AddTodo addTodo={addTodo} />
        <div className="item-todo">
          <Todo td={todos} onDelete={onDelete} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
