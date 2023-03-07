import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Auth from './features/auth/Auth'
// import Main from './Pages/Main'
import Public from "./components/Public"



/**
 * If the user is not logged in, show the login page, otherwise show the dashboard.
 */

export function Routing() {

  return (
    <Routes>
      <Route path="/*"  element={<Public />} />
      <Route path="/login"  element={<Auth />} />
      {/* <Route path="/main" element={ <Main /> } /> */}
    </Routes>
  )
}

export default Routing
