// Write your code here
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  login = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="login-container">
        <div className="card">
          <Message message={isLogin} />
          {isLogin ? (
            <Login login={this.login} />
          ) : (
            <Logout logout={this.login} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
