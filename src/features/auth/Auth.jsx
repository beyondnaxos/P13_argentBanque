import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './AuthSlice'
import { useLoginMutation } from './AuthApiSlice'
import styles from './Auth.module.css'

function Auth() {
  const userRef = useRef()
  const errRef = useRef()
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userData = await login({ user, pwd }).unwrap()
      dispatch(setCredentials({ ...userData, user }))
      setUser('')
      setPwd('')
      navigate('/main')
    } catch (err) {
      if (!err?.response) {
        setErrMsg('Server is not responding')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing user or password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unhauthorized')
      } else {
        setErrMsg('Login failed')
      }
      errRef.current.focus()
    }
  }

  const handleUserInput = (e) => setUser(e.target.value)
  const handlePwdInput = (e) => setPwd(e.target.value)

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className={styles.formContainer}>
      <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      <h1 className={styles.formTitle}>Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formLabel} htmlFor="username">
          Username:
        </label>
        <input
          className={styles.formInput}
          color="black"
          type="text"
          id="username"
          ref={userRef}
          value={user}
          onChange={handleUserInput}
          autoComplete="off"
          required
        />

        <label className={styles.formLabel} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.formInput}
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={pwd}
          required
        />
        <button className={styles.formBtn}>Sign In</button>
      </form>
    </section>
  )

  return content
}

export default Auth
