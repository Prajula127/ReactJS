import {formatDistanceToNowStrict} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {Link} from 'react-router-dom'

import './index.css'

const HomeVideoItems = props => {
  const {homeVideo} = props
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = homeVideo

  const dateDistance = formatDistanceToNowStrict(new Date(publishedAt))
  return (
    <li className="home-item-list">
      <Link to={`/videos/${id}`} className="links">
        <img className="thumbnail" alt="video thumbnail" src={thumbnailUrl} />
      </Link>

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
  )
}
export default HomeVideoItems
