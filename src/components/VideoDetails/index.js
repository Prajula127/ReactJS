import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'

import Header from '../Header'
import Sidebar from '../Sidebar'

import './index.css'
import SavedContext from '../../SavedContext'

const apiStatusUpdate = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusUpdate.initial,
    videoDetail: [],
    like: false,
    dislike: false,
    saving: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusUpdate.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const videoUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoUrl, options)
    if (response.ok) {
      const data = await response.json()
      const videoUpdate = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        apiStatus: apiStatusUpdate.success,
        videoDetail: videoUpdate,
      })
    } else {
      this.setState({apiStatus: apiStatusUpdate.failure})
    }
  }

  onLikeClick = () => {
    this.setState({like: true, dislike: false})
  }

  onDislikeClick = () => {
    this.setState({like: false, dislike: true})
  }

  renderGetVideoDetails = () => (
    <SavedContext.Consumer>
      {value => {
        const {addSavedItems} = value

        const {videoDetail, like, dislike, saving} = this.state

        const {
          title,
          videoUrl,
          name,
          profileImageUrl,
          subscriberCount,
          viewCount,
          publishedAt,
          description,
        } = videoDetail

        const dateDistance = formatDistanceToNowStrict(new Date(publishedAt))

        const likes = like ? 'like1' : 'like2'
        const dislikes = dislike ? 'like1' : 'like2'
        const likesIcon = like ? 'like11' : 'like22'
        const dislikeIcon = dislike ? 'like11' : 'like22'
        const saved = saving ? 'like1' : 'like2'
        const saveIcon = saving ? 'like11' : 'like22'

        const onSavingItem = () => {
          addSavedItems(videoDetail)
          if (saving) {
            this.setState({saving: false})
          } else {
            this.setState({saving: true})
          }
        }

        return (
          <div className="video-details-container">
            <div className="video-container">
              <ReactPlayer url={videoUrl} className="video" controls />
            </div>
            <div className="home-details">
              <p className="home-title">{title}</p>
              <div className="views-container">
                <div className="dot-container">
                  <p className="views">{viewCount} views</p>
                  <BsDot className="dot" />
                  <p className="views">{dateDistance} ago</p>
                </div>
                <div className="likes-container">
                  <button
                    className={likes}
                    type="button"
                    onClick={this.onLikeClick}
                  >
                    <BiLike className={likesIcon} /> Like
                  </button>
                  <button
                    className={dislikes}
                    type="button"
                    onClick={this.onDislikeClick}
                  >
                    <BiDislike className={dislikeIcon} /> Dislike
                  </button>
                  <button
                    className={saved}
                    type="button"
                    onClick={onSavingItem}
                  >
                    <BiListPlus className={saveIcon} /> Saved
                  </button>
                </div>
              </div>
            </div>
            <hr className="line" />
            <div className="profile-image-container ">
              <img
                className="profile-image profile1"
                alt="channel logo"
                src={profileImageUrl}
              />
              <div className="home-details">
                <p className="home-name">{name}</p>
                <p className="views">{subscriberCount} subscribers</p>
                <p className="home-name">{description}</p>
              </div>
            </div>
          </div>
        )
      }}
    </SavedContext.Consumer>
  )

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#000000" height="50" width="50" />
    </div>
  )

  renderFailureView = () => (
    <div className="no-videos-container">
      <img
        className="no-videos"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
      />
      <h1 className="no-search">Oops! Something Went Wrong</h1>
      <p className="no-search-desc">
        We are having some trouble to complete your request.
        <br /> Please try again.
        <br />
        Please try again.
      </p>
      <button className="retry" type="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.renderGetVideoDetails()
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
          const nxtBanner = isTheme
            ? 'nxt-banner-container banner'
            : 'nxt-banner-container'
          return (
            <>
              <Header />
              <div className="nxt-watch-container">
                <div className="nxt-container">
                  <Sidebar />
                  <div className={nxtBanner}>{this.renderApiStatus()}</div>
                </div>
              </div>
            </>
          )
        }}
      </SavedContext.Consumer>
    )
  }
}
export default VideoDetails
