import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'react-bootstrap'
import { Layout } from 'src/components/Layout'
import { ContactListPage, GroupPage, ContactPage, FavouriteListPage, GroupListPage } from 'src/pages'

import './MainApp.scss'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch } from 'src/store/hooks'
import * as Auth from 'src/store/auth'

export const MainApp = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(Auth.action.check())
    }, [])

    return (
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
    )
}
