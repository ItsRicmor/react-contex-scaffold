
import * as ActionUtility from '../../utilities/ActionUtility';


export const ADD_TODO = 'TodosAction.ADD_TODO';

export const addTodo = (todo) => {
    return ActionUtility.createAction(ADD_TODO, todo);
}

export const UPDATE_TODO = 'TodosAction.UPDATE_TODO';

export const updateTodo = (todo) => {
    return ActionUtility.createAction(UPDATE_TODO, todo);
}

export const REMOVE_TODO = 'TodosAction.REMOVE_TODO';

export const removeTodo = (id) => {
    return ActionUtility.createAction(REMOVE_TODO, id);
}