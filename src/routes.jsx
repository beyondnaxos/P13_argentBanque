import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Public from './components/Public'
import Layout from './components/Layout'
import Login from './features/auth/Auth'
import RequireAuth from './features/auth/RequireAuth'
import User from './Pages/User'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './features/auth/AuthSlice'

/**
 * If the user is not logged in, show the login page, otherwise show the dashboard.
 */

export function Routing(props) {
  const token = useSelector(selectCurrentToken)

  return (
    <>
      <Nav />
      
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public Routes */}
            <Route index element={<Public />} />
            <Route path="login" element={<Login />} />
            {/* private Routes */}
            <Route element={<RequireAuth />}>
              <Route index path="profile" element={<User />} />
            </Route>
          </Route>
        </Routes>
      <Footer />
    </>
  )
}

export default Routing
