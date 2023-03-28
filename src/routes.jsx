import { Routes, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import Public from './components/Public'
import Layout from './components/Layout'
import Login from './features/auth/Auth'
import RequireAuth from './features/auth/RequireAuth'
import User from './Pages/User'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'


/**
 * 
 * @param {*} props 
 * @returns 
 * @component
 * @name Routing
 * @description A component that handles the routing of the application.
 * @example <Routing />
 */

export function Routing() {


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
