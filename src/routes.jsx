import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Main from './Pages/Main'
import Public from './components/Public'
import Layout from './components/Layout'
import Login from './features/auth/Auth'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import Index from './Pages/Index'
import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer'

/**
 * If the user is not logged in, show the login page, otherwise show the dashboard.
 */

export function Routing(props) {
  return (
    <>
      <Nav />
      <main className="main bg-dark">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public Routes */}
          <Route index element={<Login />} />
          {/* <Route path="login" element={<Public />} /> */}
          {/* private Routes */}
          <Route element={<RequireAuth />}>
            {/* <Route path="main" element={<Welcome />} /> */}
            <Route path="main" element={<Index />} />
            {/* <Route path="main" element={<Main />} /> */}
          </Route>
        </Route>
      </Routes>
      </main>
      <Footer />
    </>
  )
}

export default Routing
