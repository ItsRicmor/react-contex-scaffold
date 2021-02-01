import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';

import * as TodosAction from '../../../../../stores/todos/TodosAction';
import { useForm } from '../../../../hooks/useForm'
import { Container } from '../../../../components/ui/Container';
import { AppContextState } from '../../../../../context';


export const TodoFrom = () => {

    const { state, dispatch } = useContext(AppContextState);

    const [todo, handleInputChange, reset] = useForm({ description: '', author: '' });
    const { description, author } = todo;

    const onSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo,
            id: state.todos.length + 1
        }
        dispatch(TodosAction.addTodo(newTodo));
        reset();
    }

    return (
        <>
            <Container justify="center">
                <h3 className="d-block">Crear una tarea</h3>
            </Container>
            <form className="pr-5 pl-5" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción de tarea</label>
                    <input
                        id="description"
                        name="description"
                        className="form-control"
                        placeholder="descripción..."
                        value={description}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Nombre de autor</label>
                    <input
                        id="author"
                        name="author"
                        className="form-control"
                        placeholder="Autor..."
                        value={author}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="d-grid gap-2 pr-5 pl-5">
                    <button className="btn btn-primary" type="submit">Guardar Tarea</button>
                </div>
            </form>
        </>
    )
}
