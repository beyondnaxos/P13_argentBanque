import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Main from './Pages/Main'
import Public from './components/Public'
import Layout from './components/Layout'
import Login from './features/auth/Auth'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'

/**
 * If the user is not logged in, show the login page, otherwise show the dashboard.
 */

export function Routing(props) {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>
        {/* public Routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />
        {/* private Routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="main" element={<Main />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default Routing
