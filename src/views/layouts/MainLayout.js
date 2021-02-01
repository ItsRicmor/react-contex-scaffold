import React from 'react'
import { Container } from '../components/ui/Container'
import { Navbar } from '../components/ui/Navbar'
import { TodosPage } from '../pages/todos/TodosPage'

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Container>
                <TodosPage />
            </Container>
        </>
    )
}
