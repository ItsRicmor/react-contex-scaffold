import React, { useContext } from 'react'

import { AppContextState } from '../../../../../context'
import * as TodosAction from '../../../../../stores/todos/TodosAction';
import { Col } from '../../../../components/ui/Col'
import { Row } from '../../../../components/ui/Row'

export const ListTodosItem = ({ description, author, id }) => {
    const { dispatch } = useContext(AppContextState)

    const onDeleteTodo = () => {
        dispatch(TodosAction.removeTodo(id))
    }

    return (
        <div className="card mb-2 shadow-sm">
            <div className="card-body">
                <Row>
                    <Col xs={9}>
                        <p className="m-0"><strong>Tarea:</strong> {description}</p>
                        <p className="m-0"><strong>Autor:</strong> {author}</p>
                    </Col>
                    <Col xs={3} className="d-flex justify-content-center align-items-center">
                        <button type="button" onClick={onDeleteTodo} className="btn btn-danger">Eliminar</button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
