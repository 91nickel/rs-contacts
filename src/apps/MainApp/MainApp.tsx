import React  from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'react-bootstrap'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

import { store, persistor } from 'src/store'

import { Layout } from 'src/components/Layout'
import { ContactListPage, GroupPage, ContactPage, FavouriteListPage, GroupListPage } from 'src/pages'

import './MainApp.scss'
import 'react-toastify/dist/ReactToastify.css'

export const MainApp = () => {
    return (
        <StoreProvider store={store}>
            <PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>
                <ThemeProvider
                    breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                    minBreakpoint="xxs"
                >
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route index element={
                                    <ContactListPage/>
                                }/>
                                <Route path="contact">
                                    <Route index element={
                                        <ContactListPage/>
                                    }/>
                                    <Route path=":contactId" element={
                                        <ContactPage/>
                                    }/>
                                </Route>
                                <Route path="groups">
                                    <Route index element={
                                        <GroupListPage/>
                                    }/>
                                    <Route path=":groupId" element={
                                        <GroupPage/>
                                    }/>
                                </Route>
                                <Route path="favorit" element={
                                    <FavouriteListPage/>
                                }/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </PersistGate>
            <ToastContainer/>
        </StoreProvider>
    )
}
