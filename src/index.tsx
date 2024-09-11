import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { MainApp } from './apps/MainApp'
import reportWebVitals from './reportWebVitals'
// import { Provider as StoreProvider } from 'react-redux/es/exports'
// import { persistor, store } from 'src/store'
// import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

// import { autorun, reaction, when } from 'mobx'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    // <React.StrictMode>
    // <StoreProvider store={store}>
    <>
        {/*<PersistGate persistor={persistor} loading={<h1>Loading...</h1>}>*/}
        <MainApp/>
        {/*</PersistGate>*/}
        <ToastContainer/>
    </>
    // </StoreProvider>
    // </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
