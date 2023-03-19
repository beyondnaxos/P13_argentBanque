import React, { useEffect } from 'react'
import { Account } from '../components/Account/Account'
import { Header } from '../components/Header/Header'
import styles from './User.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserDataMutation } from '../features/user/userApiSlice'
import { setCredentials } from '../features/user/userSlice'

/**
 * @returns {JSX.Element} A JSX User component.
 * @component
 * @name User
 * @description A component that displays a user section with a header and accounts.
 * @example <User />
 */

const User = () => {
  const dispatch = useDispatch()
  const [getUserData] = useGetUserDataMutation()

  useEffect(() => {
    getUserDatas()
  }, [])

  const getUserDatas = async () => {
    const userData = await getUserData({}).unwrap()
    dispatch(
      setCredentials({
        firstname: userData.body.firstName,
        lastname: userData.body.lastName,
      })
    )
  }

  return (
    <main className="main bg-dark">
      <div className={styles.profilContainer}>
        <Header />
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </div>
    </main>
  )
}

export default User
