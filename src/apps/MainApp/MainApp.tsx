import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'react-bootstrap'
import { Layout } from 'src/components/Layout'
import { ContactListPage, GroupPage, ContactPage, FavouriteListPage, GroupListPage } from 'src/pages'

import './MainApp.scss'
import 'react-toastify/dist/ReactToastify.css'
import { useAppDispatch } from 'src/store/hooks'
import * as Auth from 'src/store/auth'
import AppRoutes from 'src/routes'

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
            <AppRoutes/>
        </ThemeProvider>
    )
}
