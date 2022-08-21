import React from 'react'
 const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='containar' >
    <h4>{todo.title}</h4>  
    <p>{todo.desc}</p>
    <button className='btn btn-sm btn-danger' onClick={ ()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}

export default TodoItem
// todo .js se onDelete props ki help se todoItem me sent kiya
// onClick ke inside ek arrow function ko pass kiya jisme  onDelete call ho rha tha or uske inside todo tha jo ki app.js se sent kiya gya