import React, { useEffect } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'

import AppRoutes from 'src/routes'
import store, { StoreList } from 'src/store'

import './MainApp.scss'
import 'react-toastify/dist/ReactToastify.css'

export const MainApp = observer(() => {

    useEffect(() => {
        store[StoreList.auth].check()
    }, [])

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <AppRoutes/>
        </ThemeProvider>
    )
})
