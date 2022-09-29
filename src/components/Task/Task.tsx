import React from "react";
import { useDispatch } from "react-redux";
import { Notes, removeTodo, toggleComplete } from "../../redux/sliceNotes";
import trashIcon from "../../assets/solid-trash.png";

import { Container } from "./styles";

const Task: React.FC<Notes> = ({ id, name, done }) => {
  const dispach = useDispatch();

  // Método para mudar o estado done do todo;
  const handleToggleComplete = (id: number) => {
    dispach(toggleComplete(id));
  };
  return (
    <Container>
      {" "}
      <li key={id}>
        <div className="name-container">
          <div className="checkbox-circle">
            <input
              type="checkbox"
              id={`checkbox-circle${id}`}
              name="check"
              checked={done ? true : false}
              onChange={() => handleToggleComplete(id)}
            />
            <label htmlFor={`checkbox-circle${id}`}></label>
          </div>{" "}
          <input type="checkbox" name="myCheckbox" />
          <span>{name}</span>
        </div>

        <button className="remove" onClick={() => dispach(removeTodo(id))}>
          <img src={trashIcon} alt={"Trash icon"} />
        </button>
      </li>
    </Container>
  );
};

export default Task;
