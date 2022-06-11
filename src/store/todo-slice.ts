import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoModel } from '../models/todo.model';

interface TodoState {
  all_todos: TodoModel[];
  single_todo: TodoModel;
}

const initialTodoState: TodoState = {
  all_todos: [],
  single_todo: {
    userId: 0,
    id: 0,
    title: '',
    completed: false,
  },
};

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    setTodos(state, action: PayloadAction<TodoModel[]>) {
      state.all_todos = action.payload;
    },
    setSingleTodo(state, action: PayloadAction<TodoModel>) {
      state.single_todo = action.payload;
    },
  },
});

export default todoSlice;
