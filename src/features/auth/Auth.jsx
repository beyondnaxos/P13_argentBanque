import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './AuthSlice'
import { useLoginMutation } from './AuthApiSlice'
import styles from './Auth.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import fa user circle from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Auth() {
  const userRef = useRef()
  const errRef = useRef()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = await login({ email, password }).unwrap()
      console.log(userData.body.token)
      dispatch(setCredentials({ email, accessToken: userData.body.token }))
      setEmail('')
      setPassword('')
      navigate('/main')
      localStorage.setItem('token', userData.body.token);

    } catch (err) {
      if (!err?.response) {
        setErrMsg('Server is not responding')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing email or password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unhauthorized')
      } else {
        setErrMsg('Login failed')
      }
      errRef.current.focus()
    }
  }

  // if remerme is checked then save the token in local storage otherwise remove it

  const handleEmailInput = (e) => setEmail(e.target.value)
  const handlePasswordInput = (e) => setPassword(e.target.value)

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      {/* <i class="fa fa-user-circle sign-in-icon"></i> */}
      <h1 className={styles.formTitle}>Sign In</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            className={styles.formInput}
            color="black"
            type="text"
            id="email"
            ref={userRef}
            value={email}
            onChange={handleEmailInput}
            autoComplete="off"
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            className={styles.formInput}
            type="password"
            id="password"
            onChange={handlePasswordInput}
            value={password}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <button className={styles.formBtn}>Sign In</button> */}
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
    </main>
  )

  return content
}

export default Auth
