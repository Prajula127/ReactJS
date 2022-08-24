import './index.css'

const GameItem = props => {
  const {gameList, clickImage} = props
  const {id, thumbnailUrl} = gameList

  const clickedImage = () => {
    clickImage(id)
  }

  return (
    <li className="game-items">
      <button className="image-button" type="button" onClick={clickedImage}>
        <img className="images" alt="thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}
export default GameItem
