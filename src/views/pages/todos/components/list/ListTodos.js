import React, { useContext } from 'react'
import { AppContextState } from '../../../../../context';
import { Container } from '../../../../components/ui/Container'
import { selectTodos } from '../../../../../selectors/todos';
import { ListTodosItem } from './ListTodosItem';

export const ListTodos = () => {
    const { state } = useContext(AppContextState);
    const todos = selectTodos(state);
    console.log(state)
    return (
        <>
            <Container justify="center">
                <h3 className="d-block">Lista de tareas</h3>
            </Container>
            <Container className="overflow-auto" style={{ height: 500 }}>
                {
                    todos.length ? (
                        todos.map((todo, index) => <ListTodosItem key={`item-${index}`} {...todo} />)
                    ) : (
                            <Container justify="center" className="mt-4">
                                <h6>No hay tareas</h6>
                            </Container>
                        )
                }
            </Container>
        </>
    )
}
