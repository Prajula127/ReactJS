import {Link} from 'react-router-dom'

import './index.css'

const GamingVideos = props => {
  const {gamingVideos} = props
  const {id, title, thumbnailUrl, viewCount} = gamingVideos

  return (
    <li className="gaming-item-list">
      <Link to={`/videos/${id}`} className="links">
        <img className="thumb" alt="video thumbnail" src={thumbnailUrl} />
      </Link>
      <p className="gaming-title">{title}</p>
      <p className="view">{viewCount} Watching Worldwide</p>
    </li>
  )
}

export default GamingVideos
