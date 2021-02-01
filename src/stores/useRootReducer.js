import combineReducers from 'react-combine-reducers';
import { TodoReducer } from './todos/TodosReducer';

export const useRootReducer = () => {
    const reducerMap = {
      todos: [TodoReducer, []]
    };
  
    return combineReducers(reducerMap);
  }