import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { TodoModel } from '../models/todo.model';
import { getAllTodos, getSingleTodo } from '../service/todoService';
import { RootState } from './store';
import todoSlice from './todo-slice';

export const todoActions = todoSlice.actions;

export const fetchTodos = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    if (getState().todo.all_todos.length === 0) {
      const response: TodoModel[] = await getAllTodos();
      dispatch(todoActions.setTodos(response));
    }
  };
};

export const fetchSingleTodo = (
  todo_id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const response: TodoModel = await getSingleTodo(todo_id);
    dispatch(todoActions.setSingleTodo(response));
  };
};
