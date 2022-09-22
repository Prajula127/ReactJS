import {BiListPlus} from 'react-icons/bi'

import SavedContext from '../../SavedContext'
import SavedItems from '../SavedItems'
import Header from '../Header'
import Sidebar from '../Sidebar'

const SavedVideos = () => (
  <SavedContext.Consumer>
    {value => {
      const {savedItems, isTheme} = value
      const notZero = savedItems.length !== 0
      const trend = isTheme
        ? 'nxt-trend-container trend2'
        : 'nxt-trend-container'
      const trendIcon = isTheme ? 'trend-icon trend-icon2' : 'trend-icon'
      const menuIcon = isTheme ? 'menu-icons menu-icons2' : 'menu-icons'
      const trending = isTheme
        ? 'trending-container trending-container2'
        : 'trending-container'
      const heading = isTheme ? 'heading heading2' : 'heading'
      return (
        <>
          <Header />
          <div className="nxt-watch-container">
            <div className="nxt-container">
              <Sidebar />
              <div className={trend}>
                <div className={trending}>
                  <div className={trendIcon}>
                    <BiListPlus className={menuIcon} />
                  </div>
                  <h1 className={heading}>Saved Videos</h1>
                </div>
                {notZero ? (
                  <ul className="trending-video-container">
                    {savedItems.map(each => (
                      <SavedItems key={each.id} savedVideos={each} />
                    ))}
                  </ul>
                ) : (
                  <div className="no-videos-container">
                    <img
                      className="no-videos"
                      alt="no saved videos"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    />
                    <h1 className="no-search">No Saved videos found</h1>
                    <p className="no-search-desc">
                      You can save your videos while watching them
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )
    }}
  </SavedContext.Consumer>
)

export default SavedVideos
