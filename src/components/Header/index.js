import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import './index.css'
import SavedContext from '../../SavedContext'

const Header = props => {
  const {history} = props
  const clickConfirm = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <SavedContext.Consumer>
      {value => {
        const {isTheme, themeIsClicked} = value

        const clickTheme = () => {
          themeIsClicked()
        }

        const imageTheme = isTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const navColor = isTheme ? 'nav-header nav' : 'nav-header'
        const logout = isTheme ? 'logout out' : 'logout'

        const popContainer = isTheme
          ? 'pop-container pop-container2'
          : 'pop-container'

        return (
          <nav className={navColor}>
            <div className="header-container">
              <Link to="/" className="links">
                <img className="logo" alt="website logo" src={imageTheme} />
              </Link>
              <ul className="nav-items">
                <li className="nav-link">
                  <button
                    className="theme"
                    type="button"
                    data-testid="theme"
                    onClick={clickTheme}
                  >
                    {isTheme ? (
                      <FiSun className="icon-sun" />
                    ) : (
                      <FaMoon className="icon" />
                    )}
                  </button>
                </li>
                <li className="nav-link">
                  <img
                    className="profile"
                    alt="profile"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  />
                </li>
                <li className="nav-link">
                  <Popup
                    modal
                    trigger={
                      <button className={logout} type="button">
                        Logout
                      </button>
                    }
                  >
                    {close => (
                      <div className={popContainer}>
                        <p className="pop-desc">
                          Are you sure, you want to logout
                        </p>
                        <div className="pop-button">
                          <button
                            className="pops-out"
                            type="button"
                            onClick={() => close()}
                          >
                            Cancel
                          </button>
                          <button
                            className="pops"
                            type="button"
                            onClick={clickConfirm}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </li>
              </ul>
            </div>
          </nav>
        )
      }}
    </SavedContext.Consumer>
  )
}
export default withRouter(Header)
