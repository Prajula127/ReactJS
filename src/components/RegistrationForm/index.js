// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    first: '',
    last: '',
    firstMsg: '',
    lastMsg: '',
    success: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {first, last} = this.state
    if (first === '' && last === '') {
      this.setState({firstMsg: 'Required', lastMsg: 'Required', success: false})
    } else if (first === '') {
      this.setState({firstMsg: 'Required', success: false})
    } else if (last === '') {
      this.setState({lastMsg: 'Required', success: false})
    } else {
      this.setState({first: '', last: '', success: true})
    }
  }

  onFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstMsg: 'Required'})
    } else {
      this.setState({firstMsg: ''})
    }
    this.setState({first: event.target.value})
  }

  onLastName = event => {
    if (event.target.value === '') {
      this.setState({lastMsg: 'Required'})
    } else {
      this.setState({lastMsg: ''})
    }
    this.setState({last: event.target.value})
  }

  anotherResponse = () => {
    this.setState({success: false})
  }

  onUserSuccess = () => (
    <div className="form-container">
      <img
        className="success"
        alt="success"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <p className="submitted">Submitted Successfully</p>
      <button
        className="submit-button"
        type="submit"
        onClick={this.anotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  onRegisterForm = () => {
    const {firstMsg, lastMsg} = this.state
    return (
      <>
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <div className="name-container">
            <label className="label" htmlFor="first">
              First Name
            </label>
            <input
              className="input"
              id="first"
              placeholder="First name"
              type="text"
              //   value={firstName}
              onBlur={this.onFirstName}
            />
            <p className="name-error">{firstMsg}</p>
          </div>
          <div className="name-container">
            <label className="label" htmlFor="last">
              Last Name
            </label>
            <input
              className="input"
              id="last"
              placeholder="Last name"
              type="text"
              //   value={lastName}
              onBlur={this.onLastName}
            />
            <p className="name-error">{lastMsg}</p>
          </div>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </>
    )
  }

  render() {
    const {success} = this.state
    return (
      <div className="register-container">
        <h1 className="registration">Registration</h1>
        {success ? this.onUserSuccess() : this.onRegisterForm()}
      </div>
    )
  }
}
export default RegistrationForm
