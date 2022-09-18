import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
    isCredential: false,
  }

  onUsername = event => this.setState({username: event.target.value})

  onPassword = event => this.setState({password: event.target.value})

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
    // console.log(response)
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMessage: errorMsg, isCredential: true})
  }

  render() {
    const {username, password, errorMessage, isCredential} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="app-container">
        <form className="form-container" onSubmit={this.onSubmitLoginForm}>
          <div className="jobby-login-container">
            <img className="login-logo" alt="website logo" src={websiteLogo} />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              className="input"
              type="text"
              value={username}
              onChange={this.onUsername}
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={this.onPassword}
              placeholder="Password"
              id="password"
            />
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          {isCredential && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
