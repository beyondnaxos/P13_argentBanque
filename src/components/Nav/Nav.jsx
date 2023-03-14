import React from 'react'
import { logOut } from '../../features/auth/AuthSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  selectCurrentFirstname,
  selectCurrentLastname,
} from '../../features/user/userSlice'
// import { useSelector } from 'react-redux'
// import { selectCurrentToken } from '../../features/auth/AuthSlice'

const Nav = () => {
  const userFirstname = useSelector(selectCurrentFirstname)
  const userLastname = useSelector(selectCurrentLastname)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const token = useSelector(selectCurrentToken)
  const token = localStorage.getItem('token')

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          //   src="./img/argentBankLogo.png"
          //   src public img argentBankLogo.png
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <p>
          {userFirstname} {userLastname}
        </p>
        {token ? (
          <span
            role="button"
            className="main-nav-item"
            onClick={() => {
              dispatch(logOut())
              navigate('/')
            }}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </span>
        ) : (
          <a className="main-nav-item" href="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        )}
      </div>
    </nav>
  )
}

export default Nav
