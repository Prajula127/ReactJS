const GameLists = props => {
  const {choices, choice} = props
  const {id, imageUrl} = choices
  const lower = id.toLowerCase()

  const clickChoice = () => {
    choice(id, imageUrl)
  }
  return (
    <li className="lists">
      <button
        data-testid={`${lower}Button`}
        className="image-button"
        type="button"
        onClick={clickChoice}
      >
        <img className="images" alt={id} src={imageUrl} />
      </button>
    </li>
  )
}
export default GameLists
