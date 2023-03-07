import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Auth.module.css'

function Auth() {

    const navigate = useNavigate()

    const handleLogin = () => {
        navigate('/main')
    }

  return (
    <div className={styles.formContainer}>

        <h1 className={styles.formTitle} >Login</h1>

        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">Email</label>
                <input className={styles.formInput} type="email" name="email" id="email" />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="password">Password</label>
                <input className={styles.formInput} type="password" name="password" id="password" />
            </div>
            <div className={styles.formGroup}>
                <button className={styles.formBtn} type="submit"  onClick={() => handleLogin()}>Login</button>
            </div>

        </form>
    </div>
  )
}

export default Auth
