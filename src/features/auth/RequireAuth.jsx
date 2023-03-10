import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from './AuthSlice'

const RequireAuth = () => {
  // const token = useSelector(selectCurrentToken)
  const token = localStorage.getItem('token')
  const location = useLocation()
  console.log('RequireAuth token: ', token)

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RequireAuth
