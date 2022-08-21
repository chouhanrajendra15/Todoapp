import React from 'react'
import TodoItem from './TodoItem'

 const Todos = (props) => {
  return (
   <div className = "container" >
     <h3 className='text-center my-3'> Todos List </h3>
     {props.todos.length!==0?  props.todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    }):"NO Todo is Here"
     }
    </div>
    
  )
}

export default Todos
//app.js se onDelete Todos.js me props ki help se sent kiya