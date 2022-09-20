import './index.css'

const GameResult = props => {
  const {my, opponent, msg, playAgain} = props
  console.log(my.image)

  return (
    <div className="result-container">
      <div className="game-result-container">
        <div className="my-choice">
          <p className="my">YOU</p>
          <img className="images" alt="your choice" src={my[1]} />
        </div>
        <div className="my-choice">
          <p className="my">OPPONENT</p>
          <img
            className="images"
            alt="opponent choice"
            src={opponent.imageUrl}
          />
        </div>
      </div>
      <p className="msg">{msg}</p>
      <button className="pop" type="button" onClick={playAgain}>
        PLAY AGAIN
      </button>
    </div>
  )
}
export default GameResult
