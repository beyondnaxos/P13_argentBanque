import { useEffect } from 'react'
import { Features } from './Features/Features'
import Hero from './Hero/Hero'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/user/userSlice'
import { useGetUserDataMutation } from '../features/user/userApiSlice'

/**
 * @returns {JSX.Element} A JSX Public component.
 * @component
 * @name Public
 * @description A component that displays a public section with a hero and features.
 * @example <Public />
 */

const Public = () => {
  const dispatch = useDispatch()

  const [getUserData] = useGetUserDataMutation()

  useEffect(() => {
    getUserDatas()
  }, [])

  const getUserDatas = async () => {
    const userData = await getUserData({}).unwrap()
    console.log(userData.body.firstName)
    dispatch(
      setCredentials({
        firstname: userData.body.firstName,
        lastname: userData.body.lastName,
      })
    )
  }

  return (
    <main>
      <Hero />
      <Features />
    </main>
  )
}

export default Public
