import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './AuthSlice'

const RequireAuth = () => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token')
  const location = useLocation()
  console.log('RequireAuth token: ', token)

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  )
}

export default RequireAuth
