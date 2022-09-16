// Write your code here
import {Link} from 'react-router-dom'

import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const clickTheme = () => {
        toggleTheme()
      }

      const navContainer = isDarkTheme ? 'nav-light-header' : 'nav-dark-header'
      const navLinks = isDarkTheme ? 'nav-light-links' : 'nav-links'
      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const theme = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      return (
        <nav className={navContainer}>
          <div className="nav-content">
            <Link className="links" to="/">
              <img className="logo" alt="website logo" src={websiteLogo} />
            </Link>
            <ul className="menu-list-container">
              <Link to="/" className="links">
                <li className={navLinks}>Home</li>
              </Link>
              <Link to="/about" className="links">
                <li className={navLinks}>About</li>
              </Link>
            </ul>
            <button
              testid="theme"
              className="button"
              type="button"
              onClick={clickTheme}
            >
              <img className="theme" alt="theme" src={theme} />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
