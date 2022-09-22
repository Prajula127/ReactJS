import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {Link} from 'react-router-dom'

import './index.css'
import SavedContext from '../../SavedContext'

const Sidebar = () => (
  <SavedContext.Consumer>
    {value => {
      const {isTheme} = value
      const sidebar = isTheme ? 'sidebar-container side' : 'sidebar-container'
      const button = isTheme ? 'buttons btn' : 'buttons'
      const icon = isTheme ? 'home-icon icon2' : 'home-icon'
      const contact = isTheme ? 'contact contact2' : 'contact'
      const enjoy = isTheme ? 'enjoy enjoy2' : 'enjoy'
      const buttons = isTheme ? 'buttons btns' : 'buttons'

      return (
        <div className={sidebar}>
          <div className="lists">
            <Link to="/" className="links">
              <div className={buttons} data-testid="home">
                <AiFillHome className={icon} />
                <p className="home"> Home</p>
              </div>
            </Link>
            <Link to="/trending" className="links">
              <div className={button} data-testid="trending">
                <HiFire className={icon} />
                <p className="home">Trending</p>
              </div>
            </Link>
            <Link to="/gaming" className="links">
              <div className={button} data-testid="gaming">
                <SiYoutubegaming className={icon} />
                <p className="home"> Gaming</p>
              </div>
            </Link>
            <Link to="/saved-videos" className="links">
              <div className={button} data-testid="savedVideos">
                <BiListPlus className={icon} />
                <p className="home"> Saved videos</p>
              </div>
            </Link>
          </div>
          <div className="contact-container">
            <p className={contact}>CONTACT US</p>
            <div className="logos-container">
              <img
                className="logos"
                alt="facebook logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              />
              <img
                className="logos"
                alt="twitter logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              />
              <img
                className="logos"
                alt="linked in logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              />
            </div>
            <p className={enjoy}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </div>
        </div>
      )
    }}
  </SavedContext.Consumer>
)

export default Sidebar
