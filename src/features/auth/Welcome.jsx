import { useSelector } from 'react-redux'
import { selectCurrentEmail, selectCurrentToken } from './AuthSlice'
import { Link } from 'react-router-dom'
// import {Main} from '../../Pages/Main'

const Welcome = () => {
  const email = useSelector(selectCurrentEmail)
  const token = useSelector(selectCurrentToken)
  const welcome = email ? `Welcome ${email}!` : 'Welcome'
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
