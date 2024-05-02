import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import store, { actions, newStore } from 'src/store'
import { RoutesList } from 'src/routes'
import { observer } from 'mobx-react-lite'
import Reducers from 'src/store/store.list'

export const MainMenu = observer(() => {
    // const dispatch = useAppDispatch();

    function handleThunkCall () {
        console.log('handleThunkCall()')
        actions.asyncFunction()
        // return dispatch(asyncFunctionActionCreator())
    }

    function handleCorrectLogin () {
        console.log('handleCorrectLogin()')
        store.correctAuth()
        // return dispatch(Auth.action.login(testAuthCredentials))
    }

    function handleIncorrectLogin () {
        console.log('handleIncorrectLogin()')
        store.incorrectAuth()
        // return dispatch(Auth.action.login(testAuthCredentials))
    }

    function handleLogout () {
        console.log('handleLogout()')
        store.logout()
        // return dispatch(Auth.action.logout())
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href={`/${RoutesList.index}`}>
                    <h1>Книга контактов</h1>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href={`/${RoutesList.groups}`}>Группы</Nav.Link>
                    <Nav.Link href={`/${RoutesList.favourite}`}>Избранное</Nav.Link>
                </Nav>
                <div>
                    <div>Total: {newStore[Reducers.contacts].count}</div>
                    <Button variant="outline-primary" onClick={handleThunkCall}>Async Function</Button>
                    <Button variant="success" onClick={handleCorrectLogin}>Correct login</Button>
                    <Button variant="warning" onClick={handleIncorrectLogin}>Incorrect login</Button>
                    <Button variant="danger" onClick={handleLogout}>Logout</Button>
                </div>
            </Container>
        </Navbar>
    )
})
