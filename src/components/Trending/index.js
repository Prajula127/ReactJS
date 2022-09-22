import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'

import Sidebar from '../Sidebar'
import Header from '../Header'
import TrendingVideos from '../TrendingVideos'

import './index.css'
import SavedContext from '../../SavedContext'

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusUpdate.initial, trendingVideos: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusUpdate.inProgress})
    const trendingApi = 'https://apis.ccbp.in/videos/trending'
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
      const trendingUpdate = {
        videos: data.videos.map(each => ({
          id: each.id,
          title: each.title,
          thumbnailUrl: each.thumbnail_url,
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          viewCount: each.view_count,
          publishedAt: each.published_at,
        })),
      }
      this.setState({
        apiStatus: apiStatusUpdate.success,
        trendingVideos: trendingUpdate,
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

  renderTrendingVideos = () => {
    const {trendingVideos} = this.state
    const {videos} = trendingVideos

    return (
      <ul className="trending-video-container">
        {videos.map(each => (
          <TrendingVideos key={each.id} trendingVideos={each} />
        ))}
      </ul>
    )
  }

  onRetry = () => {
    this.getTrendingVideos()
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderTrendingVideos()
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
                        <HiFire className={menuIcon} />
                      </div>
                      <h1 className={heading}>Trending</h1>
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
export default Trending
