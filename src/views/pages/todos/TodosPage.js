import React from 'react'
import { Col } from '../../components/ui/Col'
import { Container } from '../../components/ui/Container'
import { Row } from '../../components/ui/Row'
import { TodoFrom } from './components/form/TodoFrom'
import { ListTodos } from './components/list/ListTodos'

export const TodosPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Container className="mt-5">
                        <ListTodos />
                    </Container>
                </Col>
                <Col>
                    <Container className="mt-5">
                        <TodoFrom />
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}
