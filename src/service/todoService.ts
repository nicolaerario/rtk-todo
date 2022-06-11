import { TodoModel } from '../models/todo.model';
import { api } from './Api';

const getAllTodos = async () => {
  const response = await api().get('todos');
  return response.data;
};

const getSingleTodo = async (todo_id: number) => {
  const response = await api().get('todos');
  return response.data.filter((todo: TodoModel) => todo.id === todo_id)[0];
};

export { getAllTodos, getSingleTodo };
