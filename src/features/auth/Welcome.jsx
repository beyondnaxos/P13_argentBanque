import { useSelector } from 'react-redux'
import { selectCurrentUser, selectCurrentToken } from './AuthSlice'
import { Link } from 'react-router-dom'

const Welcome = () => {
  const user = useSelector(selectCurrentUser)
  const token = useSelector(selectCurrentToken)
  const welcome = user ? `Welcome ${user.name}!` : 'Welcome'
  const tokenAbbr = `${token.slice(0, 9)}...`
  const content = (
    <section>
      <h1>{welcome}</h1>
      <p>Your token is: {tokenAbbr}</p>
      <p>
        <Link to="/usersList">Go To the Users List</Link>
      </p>
    </section>
  )

  return content
}

export default Welcome
