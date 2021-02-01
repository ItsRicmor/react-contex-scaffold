import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./TodosAction";

export const TodoReducer = (state, action) => {
    switch (action.type) {
        case REMOVE_TODO: {
            const id = action.payload;
            console.log(id)
            return [...state.filter(item => item.id !== id)]
        }
        case ADD_TODO: {
            const todo = action.payload;
            console.log(todo)
            return [...state, todo]
        }
        case UPDATE_TODO: {
            const todo = action.payload;
            return [action.payload, ...state.filter(item => item.id !== todo.id)]
        }
        default: return state
    }
}