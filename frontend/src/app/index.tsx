import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { store } from './store'
import { Loading } from './components'
import { Error, Main } from './pages'

injectStyle()

export const App = (): JSX.Element => (
  <BrowserRouter>
    <Provider store={store}>
      <Loading />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/404" element={<Error />} />
      </Routes>
      <ToastContainer autoClose={3000} />
    </Provider>
  </BrowserRouter>
)
