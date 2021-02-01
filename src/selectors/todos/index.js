import { createSelector } from 'reselect';

const getTodos = (todos) => {
    return todos
  };

export const selectTodos = createSelector((state) => state.todos, getTodos);
