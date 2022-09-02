// Write your JS code here
import Cookies from 'js-cookie'

import Header from '../Header'
import Logout from '../LogoutButton'

import './index.css'

const Home = props => {
  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="bg-container">
      <Header />
      <h1 className="heading">Home Route</h1>
      <Logout onClick={onLogout} />
    </div>
  )
}
export default Home
