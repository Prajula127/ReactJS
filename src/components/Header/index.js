// Write your code here
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="hamburger-container">
    <div className="nav-header">
      <Link to="/" className="links">
        <img
          className="logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button className="button" type="button">
            <GiHamburgerMenu className="icons" />
          </button>
        }
      >
        {/* testid="closeButton" testid="hamburgerIconButton" */}
        {close => (
          <div className="popup-container">
            <button
              className="button close"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose className="icons" />
            </button>
            <ul className="menu-lists">
              <Link to="/" className="links" onClick={() => close()}>
                <li className="lists">
                  <AiFillHome className="icons" />
                  <p className="content">Home</p>
                </li>
              </Link>

              <Link to="/about" className="links" onClick={() => close()}>
                <li className="lists">
                  <BsInfoCircleFill className="icons" />
                  <p className="content">About</p>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
