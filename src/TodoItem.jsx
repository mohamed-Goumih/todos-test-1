/* eslint-disable react/prop-types */

function TodoItem({ todo,onUpdate,onDelete }) {
  return <li>
    {todo.title}
   <button onClick={()=>onUpdate(todo.id)} >Modifier</button>
   <button onClick={()=>onDelete(todo.id)} >Supprimer</button>
  </li>;
}

export default TodoItem;
