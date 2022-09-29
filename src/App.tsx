import { useDispatch } from "react-redux";
import NewTaskInput from "./components/Input/NewTaskInput";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import { addNote } from "./redux/sliceNotes";
import { GlobalStyles } from "./Styles/GlobalStyles";
import { Container } from "./Styles/styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NewTaskInput />
        <TaskBoard  />
      </Container>
    </>
  );
}

export default App;
