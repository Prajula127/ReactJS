import {Component} from 'react'
import {MdClose} from 'react-icons/md'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import HomeVideoItems from '../HomeVideoItems'
import Sidebar from '../Sidebar'

import './index.css'
import SavedContext from '../../SavedContext'

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusUpdate.initial,
    homeVideos: [],
    isBanner: true,
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({
      apiStatus: apiStatusUpdate.inProgress,
    })

    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')

    const homeVideoApi = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(homeVideoApi, options)
    if (response.ok) {
      const data = await response.json()
      const homeVideosUpdate = {
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
        homeVideos: homeVideosUpdate,
        apiStatus: apiStatusUpdate.success,
      })
    } else {
      this.setState({apiStatus: apiStatusUpdate.failure})
    }
  }

  onSearchVideo = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchEnter = event => {
    if (event.key === 'Enter') {
      this.getHomeVideos()
    }
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  closeBanner = () => {
    this.setState({isBanner: false})
  }

  onRetry = () => {
    this.setState({searchInput: ''}, this.getHomeVideos)
  }

  //   onHomeClick = () => {
  //     this.setState({home: true, trending: false})
  //   }

  //   onTrendingClick = () => {
  //     this.setState({home: false, trending: true})
  //   }

  //   onGamingClick = () => {
  //     this.setState({home: false, trending: false, gaming: true, saved: false})
  //   }

  //   onSavedClick = () => {
  //     this.setState({home: false, trending: false, gaming: false, saved: true})
  //   }

  getBannerSection = () => (
    <div className="banner-container" data-testid="banner">
      <div className="banner-section">
        <img
          className="banner-logo"
          alt="nxt watch logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        />
        <p className="banner-desc">
          Buy Nxt Watch Premium prepaid plans with <br /> UPI
        </p>
        <button className="get-button" type="button">
          GET IT NOW
        </button>
      </div>
      <div>
        <button
          className="close"
          type="button"
          data-testid="close"
          onClick={this.closeBanner}
        >
          <MdClose className="close-icon" />
        </button>
      </div>
    </div>
  )

  renderNoVideos = () => (
    <div className="no-videos-container">
      <img
        className="no-videos"
        alt="no videos"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      />
      <h1 className="no-search">No Search results found</h1>
      <p className="no-search-desc">
        Try different key words or remove search filter
      </p>
      <button className="retry" type="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

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

  renderGetVideos = () => {
    const {searchInput, homeVideos} = this.state
    const {videos} = homeVideos
    const filterVideos = videos.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return filterVideos.length > 0 ? (
      <ul className="home-video-container">
        {filterVideos.map(each => (
          <HomeVideoItems key={each.id} homeVideo={each} />
        ))}
      </ul>
    ) : (
      this.renderNoVideos()
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderGetVideos()
      case 'FAILURE':
        return this.renderFailureView()
      case 'IN_PROGRESS':
        return this.renderLoaderView()
      default:
        return null
    }
  }

  render() {
    const {isBanner, searchInput} = this.state
    return (
      <SavedContext.Consumer>
        {value => {
          const {isTheme} = value
          const nxtBanner = isTheme
            ? 'nxt-banner-container banner'
            : 'nxt-banner-container'

          const search = isTheme ? 'search inputs' : 'search'
          return (
            <>
              <Header />
              <div className="nxt-watch-container">
                <div className="nxt-container">
                  <Sidebar />
                  <div className={nxtBanner}>
                    {isBanner && this.getBannerSection()}
                    <div className="search-container">
                      <input
                        className={search}
                        value={searchInput}
                        type="search"
                        placeholder="Search"
                        onChange={this.onSearchVideo}
                        onKeyDown={this.onSearchEnter}
                      />
                      <button
                        className="search-button"
                        data-testid="searchButton"
                        type="button"
                        onClick={this.onClickSearch}
                      >
                        <BsSearch className="search-icon" />
                      </button>
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
export default Home
