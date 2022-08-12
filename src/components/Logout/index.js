// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button className="logout" type="button" onClick={logout}>
      Login
    </button>
  )
}
export default Logout
