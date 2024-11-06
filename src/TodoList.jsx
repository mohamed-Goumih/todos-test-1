/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem"

const TodoList = ({todos}) => {
  return (
    <div>Liste des todos 
    
    {todos.map(todo=>(
        <TodoItem todo={todo} key={todo.id}/>
    ))}

    </div>
  )
}

export default TodoList