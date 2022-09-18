import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import './index.css'

const Header = props => {
  const {history} = props

  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-lg-container">
        <Link to="/" className="links">
          <img
            className="logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </Link>
        <ul className="nav-content">
          <Link to="/" className="links">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/jobs" className="links">
            <li className="nav-link">Jobs</li>
          </Link>
        </ul>
        <button className="logout-button" type="button" onClick={onLogout}>
          Logout
        </button>
      </div>

      <div className="nav-sm-container">
        <Link to="/" className="links">
          <img
            className="logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </Link>
        <div className="nav-container">
          <ul className="nav-content">
            <Link to="/" className="links">
              <li className="nav-link">
                <AiFillHome className="icons" />
              </li>
            </Link>
            <Link to="/jobs" className="links">
              <li className="nav-link">
                <BsFillBriefcaseFill className="icons" />
              </li>
            </Link>
          </ul>
          <button className="logout-icon" type="button" onClick={onLogout}>
            <FiLogOut className="icons" />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
