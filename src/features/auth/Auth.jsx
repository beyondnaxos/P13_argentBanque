import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './AuthSlice'
import { useLoginMutation } from './AuthApiSlice'
import styles from './Auth.module.css'

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
      dispatch(setCredentials({ email , accessToken : userData.body.token }))
      setEmail('')
      setPassword('')
      navigate('/main')
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

  const handleEmailInput = (e) => setEmail(e.target.value)
  const handlePasswordInput = (e) => setPassword(e.target.value)

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
        <label className={styles.formLabel} htmlFor="email">
          Email:
        </label>
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

        <label className={styles.formLabel} htmlFor="password">
          Password:
        </label>
        <input
          className={styles.formInput}
          type="password"
          id="password"
          onChange={handlePasswordInput}
          value={password}
          required
        />
        <button className={styles.formBtn}>Sign In</button>
      </form>
    </section>
  )

  return content
}

export default Auth
