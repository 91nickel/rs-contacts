import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { useAppDispatch } from 'src/store/hooks'
import { asyncFunctionActionCreator } from 'src/store/actions'

export const MainMenu = () => {
    const dispatch = useAppDispatch();
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><h1>Книга контактов</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/groups">Группы</Nav.Link>
                    <Nav.Link href="/favorit">Избранное</Nav.Link>
                    <Button onClick={() => dispatch(asyncFunctionActionCreator())}>Async Function</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}
