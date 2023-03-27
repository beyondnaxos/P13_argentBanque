import { useLocation, Navigate, Outlet } from 'react-router-dom'

/**
 * 
 * @returns {JSX.Element} A JSX RequireAuth component.
 * @component
 * @name RequireAuth
 * @description A component that displays a layout section with a header, main, and footer.
 * @example <RequireAuth />
 */

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
