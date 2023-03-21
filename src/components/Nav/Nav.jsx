import React from 'react'
import { logOut } from '../../features/auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCurrentToken } from '../../features/auth/AuthSlice'
import {
  selectCurrentFirstname,
  selectCurrentLastname,
} from '../../features/user/userSlice'
import styles from './Nav.module.css'

/**
 * @returns {JSX.Element} A JSX Nav component.
 * @component
 * @name Nav
 * @description A component that displays a navigation bar with a logo, a link to the profile page, and a link to the login page.
 * @example <Nav />
 */


const Nav = () => {
  const userFirstname = useSelector(selectCurrentFirstname)
  const userLastname = useSelector(selectCurrentLastname)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = sessionStorage.getItem('token') ??  localStorage.getItem('token')
  
  
  return (
    <nav className="main-nav">
      <span role='button' className="main-nav-logo" onClick={() => navigate("/")}>
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </span>
      <div className={styles.logContainer}>
        {token ? (
          <>
            <span role="button" onClick={() => navigate('/profile')} className={styles.userNameLink}>
            <i className="fa fa-user-circle" style={{ 'marginRight': 4 }}></i>  { '  ' + userFirstname + ' '} {userLastname}
            </span>
            <span
              role="button"
              className="main-nav-item"
              onClick={() => {
                dispatch(logOut())
                navigate('/')
              }}
            >
              <i className="fa fa-sign-out" style={{ 'marginRight': 4 }}></i>
              Sign Out
            </span>
          </>
        ) : (
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle" style={{ 'marginRight': 4 }}></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  )
}

export default Nav
