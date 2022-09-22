import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    errorMsg: '',
    isError: false,
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onShowPassword = () => {
    const {isChecked} = this.state
    if (isChecked) {
      this.setState({isChecked: false})
    } else {
      this.setState({isChecked: true})
    }
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const userApi = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(userApi, options)
    const data = await response.json()

    if (response.ok) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }

    console.log(data)
  }

  loginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  loginFailure = error => {
    this.setState({errorMsg: error, isError: true})
  }

  render() {
    const {username, password, isChecked, errorMsg, isError} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    console.log(isChecked)
    return (
      <div className="login-app-container">
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="logo-container">
            <img
              className="logo-login"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="user">
              USERNAME
            </label>
            <input
              className="input"
              id="user"
              type="text"
              placeholder="Username"
              value={username}
              onChange={this.onUsername}
            />
          </div>
          <div className="input-container">
            <label className="label" htmlFor="pwd">
              PASSWORD
            </label>
            {isChecked ? (
              <input
                className="input"
                id="pwd"
                type="text"
                placeholder="Password"
                value={password}
                onChange={this.onPassword}
              />
            ) : (
              <input
                className="input"
                id="pwd"
                type="password"
                placeholder="Password"
                value={password}
                onChange={this.onPassword}
              />
            )}
          </div>
          <div className="checkbox-container">
            <input
              className="checkbox"
              id="show"
              type="checkbox"
              onChange={this.onShowPassword}
            />
            <label className="label-checkbox" htmlFor="show">
              Show Password
            </label>
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          {isError && <p className="error">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
