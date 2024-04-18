import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { useAppDispatch } from 'src/store/hooks'
import { asyncFunctionActionCreator } from 'src/store/actions'
import * as Auth from 'src/store/auth'

export const MainMenu = () => {
    const dispatch = useAppDispatch();

    function handleThunkCall () {
        return dispatch(asyncFunctionActionCreator())
    }

    function handleCorrectLogin () {
        return dispatch(Auth.action.login({login: 'login', password: '1234'}))
    }

    function handleIncorrectLogin () {
        return dispatch(Auth.action.login({login: 'login', password: '1234'}))
    }

    function handleLogout () {
        return dispatch(Auth.action.logout())
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/"><h1>Книга контактов</h1></Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/groups">Группы</Nav.Link>
                    <Nav.Link href="/favorit">Избранное</Nav.Link>
                </Nav>
                <div>
                    <Button variant="outline-primary" onClick={handleThunkCall}>Async Function</Button>
                    <Button variant="success" onClick={handleCorrectLogin}>Correct login</Button>
                    <Button variant="warning" onClick={handleIncorrectLogin}>Incorrect login</Button>
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </div>
            </Container>
        </Navbar>
    )
}
