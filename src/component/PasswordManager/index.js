import {Component} from 'react'

import {v4} from 'uuid'

import ShowPassword from '../ShowPassword'

import './index.css'

class PasswordManager extends Component {
  state = {
    websiteInput: '',
    userInput: '',
    passwordInput: '',
    userLists: [],
    searchInput: '',
    isChecked: false,
  }

  addWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  addUsername = event => {
    this.setState({userInput: event.target.value})
  }

  addPassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {websiteInput, userInput, passwordInput} = this.state
    const addNew = {
      id: v4(),
      websiteInput,
      userInput,
      passwordInput,
    }
    this.setState(prevState => ({
      userLists: [...prevState.userLists, addNew],
      websiteInput: '',
      userInput: '',
      passwordInput: '',
    }))
  }

  onUserSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  selectCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  noPasswords = () => (
    <div className="no-passwords-container">
      <img
        className="bg-image"
        alt="no passwords"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      />
      <p className="no">No Passwords</p>
    </div>
  )

  deleted = id => {
    const {userLists} = this.state
    this.setState({userLists: userLists.filter(each => each.id !== id)})
  }

  render() {
    const {
      userLists,
      websiteInput,
      userInput,
      passwordInput,
      searchInput,
      isChecked,
    } = this.state
    const searchResults = userLists.filter(each =>
      each.websiteInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const count = searchResults.length

    return (
      <div className="app-container">
        <div className="password-manager-container">
          <img
            className="logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />

          <div className="add-password-container">
            <div className="add-new-password">
              <h1 className="add">Add New Password</h1>
              <form className="forms" onSubmit={this.onSubmitForm}>
                <div className="user-details">
                  <img
                    className="image"
                    alt="website"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  />
                  <input
                    className="input"
                    type="text"
                    value={websiteInput}
                    onChange={this.addWebsite}
                    placeholder="Enter Website"
                  />
                </div>
                <div className="user-details">
                  <img
                    className="image"
                    alt="username"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  />
                  <input
                    className="input"
                    type="text"
                    value={userInput}
                    onChange={this.addUsername}
                    placeholder="Enter Username"
                  />
                </div>
                <div className="user-details">
                  <img
                    className="image"
                    alt="password"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  />
                  <input
                    className="input"
                    type="password"
                    value={passwordInput}
                    onChange={this.addPassword}
                    placeholder="Enter Password"
                  />
                </div>
                <div className="button-container">
                  <button className="button" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <div className="image-container">
              <img
                className="bg-image"
                alt="password manager"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              />
            </div>
          </div>
          <div className="show-password-container">
            <div className="bottom-container">
              <div className="show-passwords-container">
                <h1 className="pwd">Your Passwords</h1>
                <div className="count">
                  <p className="length">{count}</p>
                </div>
              </div>
              <div className="search-containers">
                <div className="search-container">
                  <img
                    className="search"
                    alt="search"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  />
                  <input
                    className="search-input"
                    type="search"
                    placeholder="search"
                    onChange={this.onUserSearch}
                  />
                </div>
              </div>
            </div>
            <hr className="line" />
            <div className="check-container">
              <input
                className="check"
                type="checkbox"
                checked={isChecked}
                id="check"
                onChange={this.selectCheckbox}
              />
              <label className="label" htmlFor="check">
                Show Passwords
              </label>
            </div>
            {count === 0 ? (
              this.noPasswords()
            ) : (
              <div className="adding-users">
                <ul className="lists-container">
                  {searchResults.map(each => (
                    <ShowPassword
                      key={each.id}
                      lists={each}
                      isChecked={isChecked}
                      deletes={this.deleted}
                    />
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
