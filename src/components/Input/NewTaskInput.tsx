import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/sliceNotes";
import { Container } from "./styles";
export interface NewTaskInputProps {
  addTask(task: string): void;
}

const NewTaskInput: React.FC = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();

  const handleAddNewTask = () => {
    setNewTask("");
    dispatch(addNote(newTask));
  };

  return (
    <Container>
      {" "}
      <input
        value={newTask}
        placeholder="Create a new todo..."
        onChange={(e) => setNewTask(e.target.value)}
      />{" "}
      <button onClick={() => handleAddNewTask()}>+</button>
    </Container>
  );
};

export default NewTaskInput;
