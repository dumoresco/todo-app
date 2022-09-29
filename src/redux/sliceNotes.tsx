import { createSlice } from "@reduxjs/toolkit";
import { persistedReducer, store } from "./store";

export interface Notes {
  id: number;
  name: string;
  done: boolean;
}
var i = 0;
const INITIAL_STATE: Notes[] = [];

const sliceNotes = createSlice({
  name: "todos",
  initialState: {
    todos: INITIAL_STATE,
    completedTodos: [] as Notes[],
    activeTodos: [] as Notes[],
    showTodos: true,
    showCompletedTodos: false,
    showActiveTodos: false,
  },
  reducers: {
    // Método para adicionar um todo
    addNote(state, action) {
      if (action.payload)
        state.todos.push({ id: Date.now(), name: action.payload, done: false });
    },
    // Método para marcar um todo como done
    toggleComplete(state, action) {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
    },
    // Método para remover um todo
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      if (
        state.completedTodos.findIndex((todo) => todo.id == action.payload) !=
        -1
      ) {
        state.completedTodos = state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
      if (
        state.activeTodos.findIndex((todo) => todo.id == action.payload) != -1
      ) {
        state.activeTodos = state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
    },
    // Método para mostrar todas os todos
    showAllTasksFunction(state) {
      state.showTodos = true;
      state.showActiveTodos = false;
      state.showCompletedTodos = false;
    },
    // Método para mostrar os todos pendentes
    showActiveTasksFunction(state) {
      const activeTasks = state.todos.filter((todo) => todo.done == false);
      state.activeTodos = activeTasks;
      state.showTodos = false;
      state.showActiveTodos = true;
      state.showCompletedTodos = false;
    },

    // Método para mostrar todos completados
    showCompletedTasksFunction(state) {
      const completedTasks = state.todos.filter((todo) => todo.done);
      state.completedTodos = completedTasks;
      state.showTodos = false;
      state.showActiveTodos = false;
      state.showCompletedTodos = true;
    },

    // Método para deletar os todos completados
    clearCompleted: (state) => {
      state.completedTodos = [];
      state.todos = state.todos.filter((todo) => !todo.done);
    },
  },
});

export const {
  addNote,
  toggleComplete,
  removeTodo,
  clearCompleted,
  showActiveTasksFunction,
  showAllTasksFunction,
  showCompletedTasksFunction,
} = sliceNotes.actions;

export const selectTodos = (state: any) => state.persistReducer.todos;
export const selectCompletedTodos = (state: any) =>
  state.persistReducer.completedTodos;
export const selectActiveTodos = (state: any) =>
  state.persistReducer.activeTodos;

export const selectShowTodos = (state: any) => state.todos.showTodos;
export const selectShowActiveTodos = (state: any) =>
  state.todos.showActiveTodos;
export const selectShowCompletedTodos = (state: any) =>
  state.todos.showCompletedTodos;

export default sliceNotes.reducer;
