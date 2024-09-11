import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import store, { actions, StoreList } from 'src/store'
import { RoutesList } from 'src/routes'
import { observer } from 'mobx-react-lite'
import { testAuthCredentials } from 'src/service/auth/const'

export const MainMenu = observer(() => {
    const {isAuthenticated, isLoading} = store[StoreList.auth]

    function handleThunkCall() {
        actions.asyncFunction().then(r => console.log(r))
    }

    function handleCorrectLogin() {
        store[StoreList.auth].login(testAuthCredentials)
    }

    function handleIncorrectLogin() {
        store[StoreList.auth].login({login: 'eee', password: 'www'})
    }

    function handleLogout() {
        store[StoreList.auth].logout()
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
                <div className="d-flex">
                    <div>
                        <span className="me-2">Total: {store[StoreList.contacts].count}</span>
                        {
                            isAuthenticated
                                ? <span className="badge bg-success me-2">&nbsp;</span>
                                : <span className="badge bg-danger me-2">&nbsp;</span>
                        }
                        {
                            isLoading && 'Loading'
                        }
                    </div>
                    <Button variant="outline-primary" onClick={handleThunkCall}>Async Function</Button>
                    <Button
                        variant="success"
                        disabled={isAuthenticated || isLoading}
                        onClick={handleCorrectLogin}
                    >Correct login</Button>
                    <Button
                        variant="warning"
                        disabled={isAuthenticated || isLoading}
                        onClick={handleIncorrectLogin}
                    >Incorrect login</Button>
                    <Button
                        variant="danger"
                        disabled={!isAuthenticated || isLoading}
                        onClick={handleLogout}
                    >Logout</Button>
                </div>
            </Container>
        </Navbar>
    )
})
