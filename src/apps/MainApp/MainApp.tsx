import React, { useState } from 'react'
import './MainApp.scss'
import { ThemeProvider } from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import { ContactListPage, GroupPage, ContactPage, FavouriteListPage, GroupListPage } from 'src/pages'
import { Provider as StoreProvider } from 'react-redux'

import { store, persistor } from 'src/store'
import { PersistGate } from 'redux-persist/integration/react'

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
        </StoreProvider>
    )
}
