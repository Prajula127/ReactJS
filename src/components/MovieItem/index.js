// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {movieItems} = props
  console.log(movieItems)
  const {thumbnailUrl, videoUrl} = movieItems
  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={<img className="image" alt="thumbnail" src={thumbnailUrl} />}
        className="popup-content"
      >
        {close => (
          <div className="popup-container">
            <button
              className="button"
              type="button"
              //   testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose className="icons" />
            </button>
            <div className="video-container">
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
