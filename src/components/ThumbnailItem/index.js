// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {images, update, isGallery} = props
  const {id, thumbnailUrl, thumbnailAltText} = images

  const imageClick = () => {
    update(id)
  }

  const image = isGallery ? 'image-active' : 'inactive'

  return (
    <li className="images-lists">
      <button className="img-button" type="button" onClick={imageClick}>
        <img className={image} alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default ThumbnailItem
