/* eslint-disable react/prop-types */
import { useState } from "react";

const AddTodoForm = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText('');
  };
  return (
    <>
      <div>Ajouter un Todo:</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default AddTodoForm;
