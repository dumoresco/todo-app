import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "./styles";
import {
  clearCompleted,
  Notes,
  selectActiveTodos,
  selectCompletedTodos,
  selectTodos,
  showAllTasksFunction,
  selectShowActiveTodos,
  selectShowCompletedTodos,
  selectShowTodos,
  showCompletedTasksFunction,
  showActiveTasksFunction,
} from "../../redux/sliceNotes";
import Task from "../Task/Task";
import { useAppSelector } from "../../redux/store";

const TaskBoard: React.FC = () => {
  const dispatch = useDispatch();

  const todos = useAppSelector(selectTodos);
  const completedTodos = useAppSelector(selectCompletedTodos);
  const activeTodos = useAppSelector(selectActiveTodos);

  const showTodos = useAppSelector(selectShowTodos);
  const showCompletedTodos = useAppSelector(selectShowCompletedTodos);
  const showActiveTodos = useAppSelector(selectShowActiveTodos);

  var renderTodos = [] as Notes[];

  let activeTodoNumber = 0;

  // Método para limpar os todos compeltados;
  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  todos.filter((todo: Notes) => {
    if (!todo.done) {
      activeTodoNumber++;
    }
  });

  if (showActiveTodos) {
    renderTodos = activeTodos;
  } else if (showCompletedTodos) {
    renderTodos = completedTodos;
  } else {
    renderTodos = todos;
  }

  return (
    <Container>
      <ul>
        {renderTodos.map((task: Notes) => (
          <Task done={task.done} key={task.id} id={task.id} name={task.name} />
        ))}
      </ul>
      <footer>
        <span>
          {activeTodoNumber == 0
            ? "No active tasks"
            : `${activeTodoNumber} items left`}
        </span>
        <div className="buttom-group">
          <button
            className={`${showTodos ? "active" : " "}`}
            onClick={() => dispatch(showAllTasksFunction())}
          >
            All
          </button>
          <button
            className={`${showActiveTodos ? "active" : ""}`}
            onClick={() => dispatch(showActiveTasksFunction())}
          >
            Active
          </button>
          <button
            className={`${showCompletedTodos ? "active" : ""}`}
            onClick={() => dispatch(showCompletedTasksFunction())}
          >
            Completed
          </button>
        </div>
        <button onClick={handleClearCompleted}>Clear Completed</button>
      </footer>
    </Container>
  );
};

export default TaskBoard;
