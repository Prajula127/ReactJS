import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedContext from '../../SavedContext'

const NotFound = () => (
  <SavedContext.Consumer>
    {value => {
      const {isTheme} = value
      const nxtBanner = isTheme
        ? 'nxt-banner-container banner'
        : 'nxt-banner-container'
      const image = isTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <div className="nxt-watch-container">
            <div className="nxt-container">
              <Sidebar />
              <div className={nxtBanner}>
                <div className="no-videos-container">
                  <img className="no-videos" alt="not found" src={image} />
                  <h1 className="no-search">Page Not Found</h1>
                  <p className="no-search-desc">
                    we are sorry, the page you requested could not be found.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)
export default NotFound
