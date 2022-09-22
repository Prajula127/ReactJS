import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'

import Sidebar from '../Sidebar'
import Header from '../Header'
import GamingVideos from '../GamingVideos'
import SavedContext from '../../SavedContext'

import './index.css'

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusUpdate.initial, gamingVideos: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusUpdate.inProgress})
    const trendingApi = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingApi, options)
    if (response.ok) {
      const data = await response.json()
      const gamingUpdate = {
        videos: data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          viewCount: each.view_count,
        })),
      }
      this.setState({
        apiStatus: apiStatusUpdate.success,
        gamingVideos: gamingUpdate,
      })
    } else {
      this.setState({apiStatus: apiStatusUpdate.failure})
    }
  }

  renderLoaderView = () => (
    <SavedContext.Consumer>
      {value => {
        const {isTheme} = value
        const loader = isTheme ? 'dark' : 'light'

        return (
          <div className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              height="50"
              width="50"
              className={loader}
            />
          </div>
        )
      }}
    </SavedContext.Consumer>
  )

  renderFailureView = () => (
    <SavedContext.Consumer>
      {value => {
        const {isTheme} = value
        const image = isTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <div className="no-videos-container">
            <img className="no-videos" alt="failure view" src={image} />
            <h1 className="no-search">Oops! Something Went Wrong</h1>
            <p className="no-search-desc">
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </p>
            <button className="retry" type="button" onClick={this.onRetry}>
              Retry
            </button>
          </div>
        )
      }}
    </SavedContext.Consumer>
  )

  renderGamingVideos = () => {
    const {gamingVideos} = this.state
    const {videos} = gamingVideos
    return (
      <ul className="gaming-video-container">
        {videos.map(each => (
          <GamingVideos key={each.id} gamingVideos={each} />
        ))}
      </ul>
    )
  }

  onRetry = () => {
    this.getGamingVideos()
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderGamingVideos()
      case 'FAILURE':
        return this.renderFailureView()
      case 'IN_PROGRESS':
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <SavedContext.Consumer>
        {value => {
          const {isTheme} = value
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
                        <SiYoutubegaming className={menuIcon} />
                      </div>
                      <h1 className={heading}>Gaming</h1>
                    </div>
                    {this.renderApiStatus()}
                  </div>
                </div>
              </div>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}
export default Gaming
