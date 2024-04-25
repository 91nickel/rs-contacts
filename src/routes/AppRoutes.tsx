import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'src/components/Layout'
import { ContactListPage, ContactPage, FavouriteListPage, GroupListPage, GroupPage } from 'src/pages'
import RoutesList from './RoutesList'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RoutesList.index} element={<Layout/>}>
                    <Route index element={<ContactListPage/>}/>
                    <Route path={RoutesList.contacts}>
                        <Route index element={<ContactListPage/>}/>
                        <Route path={RoutesList.contactId} element={<ContactPage/>}/>
                    </Route>
                    <Route path={RoutesList.groups}>
                        <Route index element={<GroupListPage/>}/>
                        <Route path={RoutesList.groupId} element={<GroupPage/>}/>
                    </Route>
                    <Route path={RoutesList.favourite} element={<FavouriteListPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

