import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { fetchSingleTodo, fetchTodos } from '../store/todo-actions';

const Todo = () => {
  const [todoId, setTodoId] = useState(1);
  const allTodos = useAppSelector((state) => state.todo.all_todos);
  const singleTodo = useAppSelector((state) => state.todo.single_todo);
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(fetchTodos());
  };

  const searchHandler = () => {
    dispatch(fetchSingleTodo(todoId));
  };

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodoId(parseInt(e.target.value));
  };

  return (
    <Container>
      <SearchTodo>
        <Label>Search todo by ID: </Label>
        <Input
          onChange={inputChangeHandler}
          type="number"
          min="1"
        />
        <Button onClick={searchHandler}>Search</Button>
        <TodoDetailContainer>
          <Title>Todo</Title>
          {singleTodo.id !== 0 && (
            <TodoDetails>
              <p>{singleTodo.id}</p>
              <p>{singleTodo.userId}</p>
              <p>{singleTodo.title}</p>
              <p>{singleTodo.completed}</p>
            </TodoDetails>
          )}
        </TodoDetailContainer>
      </SearchTodo>
      <Button onClick={clickHandler}>All Todos</Button>
      <Title>Todo List:</Title>
      <TodosContainer>
        <Header>
          <p>ID</p>
          <p>User ID</p>
          <p>Title</p>
        </Header>
        {allTodos.length > 0 &&
          allTodos.map((todo) => (
            <Row key={`key-${todo.id}`}>
              <p>{todo.id}</p>
              <p>{todo.userId}</p>
              <p>{todo.title}</p>
            </Row>
          ))}
      </TodosContainer>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  padding: 10px;
`;

const SearchTodo = styled.div``;

const Label = styled.label`
  font-size: 1.2em;
  font-weight: bold;
`;

const Input = styled.input``;

const Button = styled.button``;

const TodoDetailContainer = styled.div``;

const Title = styled.h3``;

const TodoDetails = styled.div`
  max-width: 50%;
  display: flex;

  > p {
    margin-right: 20px;
  }
`;

const TodosContainer = styled.div``;

const Header = styled.div`
  font-weight: bold;
  display: flex;

  > p {
    margin-right: 20px;
  }
`;

const Row = styled.div`
  display: flex;

  > p {
    margin-right: 50px;
  }
`;
