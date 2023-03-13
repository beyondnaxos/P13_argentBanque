import { Link, Navigate } from 'react-router-dom'
import styles from './Public.module.css'
// token
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../features/auth/AuthSlice'
import { Features } from './Features/Features'
import Hero from './Hero/Hero'

const Public = () => {
  const token = useSelector(selectCurrentToken)

  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}

export default Public
