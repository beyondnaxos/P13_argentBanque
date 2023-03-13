import React from 'react'
import { Account } from '../components/Account/Account'
import { Header } from '../components/Header/Header'
import styles from './Index.module.css'

const Index = () => {
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

export default Index
