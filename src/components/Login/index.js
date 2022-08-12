// Write your code here
import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button className="login" type="button" onClick={login}>
      Logout
    </button>
  )
}

export default Login
