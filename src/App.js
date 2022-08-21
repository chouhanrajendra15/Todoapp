// import React from 'react'
import Navbar from './Mycomponents/Navbar'
// import TodoItem from './Mycomponents/TodoItem'
import Todos from './Mycomponents/Todos'
import React, { useEffect, useState } from 'react'
import AddTodo from './Mycomponents/AddTodo'

const App = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("i am onDelete", todo);
    setTodos(todos.filter((e) => {
      return e!==todo;
    }));
    localStorage.setItem('todos', JSON.stringify(todos));

  }
  const addTodo = (title, desc) => {
    console.log("i am adding on this todo", title, desc);
    let sno;
    if (todos.length===0){
      sno = 0;
    }
    else {
     sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(myTodo);
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
  return (
    <div>
      <>
        <Navbar title="Todo App" home="my home" searchbar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        {/* <TodoItem  /> */}
      </>
    </div>
  )
}

export default App

