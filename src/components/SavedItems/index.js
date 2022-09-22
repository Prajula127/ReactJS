import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const SavedItems = props => {
  const {savedVideos} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = savedVideos

  const dateDistance = formatDistanceToNowStrict(new Date(publishedAt))

  return (
    <Link to={`/videos/${id}`} className="trend-item-list links">
      <li className="trend-item-list">
        <img className="thumbnails" alt="video thumbnail" src={thumbnailUrl} />
        <div className="profile-image-container">
          <img
            className="profile-image"
            alt="channel logo"
            src={profileImageUrl}
          />
          <div className="home-details">
            <p className="home-title">{title}</p>
            <p className="home-name">{name}</p>
            <div className="dot-container">
              <p className="views">{viewCount} views</p>

              <BsDot className="dot" />
              <p className="views">{dateDistance} ago</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default SavedItems
